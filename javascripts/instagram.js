(function($){
  $.fn.instagram = function(options) {
    var that = this,
      apiEndpoint = "https://api.instagram.com/v1",
      settings = {
        hash: null,
        search: null,
        accessToken: null,
        clientId: String,
        userId: null,
        show: null,
        onLoad: null,
        onComplete: null,
        maxId: null,
        minId: null
      };
        
    options && $.extend(settings, options);
    
    function createPhotoElement(photo) {
		  if((photo.caption) !== null){
		    var photo_content = photo.caption.text + "  -  ";
		  }
		  else { var photo_content = " " }
      return $('<div>')
        .addClass('instagram-placeholder')
        .attr('id', photo.id)
        // Link to Full Resolution image
        .append(
          $('<a>')
            .attr('target', '_blank')
            .addClass('fancybox')
      			.attr('href', photo.images.standard_resolution.url)
      			.attr('rel', 'group')
      			.attr('title', photo.caption.text + "&nbsp;&nbsp;/&nbsp;&nbsp;" + "<span>&hearts;</span>&nbsp;" + photo.likes.count + "&nbsp;likes")
            // Add Image + Thumbnail size
            .append(
              $('<img>')
                .addClass('instagram-image')
                // resolution: low_resolution, thumbnail, standard_resolution
                .attr('src', photo.images.thumbnail.url)
            )
        );
    }
    
    function composeRequestURL() {
      var url = apiEndpoint, params = {};
      // If User is selected
      if (settings.userId != null)     { url += "/users/" + settings.userId + "/media/recent";}
      // otherwise display the tag
      else if(settings.hash != null)   { url += "/tags/" + settings.hash + "/media/recent"; }
      // if none = display most popular
      else                             { url += "/media/popular";}
      
      settings.accessToken != null && (params.access_token = settings.accessToken);
      settings.clientId != null && (params.client_id = settings.clientId);

      url += "?" + $.param(params);
      
      return url;
    }
    
    settings.onLoad != null && typeof settings.onLoad == 'function' && settings.onLoad();
    
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: composeRequestURL(),
      success: function(res) {
        settings.onComplete != null && typeof settings.onComplete == 'function' && settings.onComplete(res.data);
        var limit = settings.show == null ? res.data.length : settings.show;
        for(var i = 0; i < limit; i++) {
          that.append(createPhotoElement(res.data[i]));
        }
        $(".fancybox").fancybox({
    			fixed: true
    		});
      }
    });
    
    return this;
  };
})(jQuery);
