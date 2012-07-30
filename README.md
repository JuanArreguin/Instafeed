## Instafeed

www.juanarreguin.com/plugins/instafeed


A simple jQuery plugin to show a list of Instagram photos.

## Usage

Insert an empty `div` with class `feed`

```html
<div id="instagram">
  <div class="feed"></div>
</div>
```

Import the script

```html
<script src="javascripts/instagram.js"></script>
```
Import the fancyBox `v2.0.6 fancyapps.com` plugin

```html
<script src="javascripts/plugins.js"></script>
```

Run the plugin

```javascript
$(document).ready(function() {
  $(".feed").instagram({
    show : '10',
    userId : '[USER ID]',
    accessToken : '[ACCESS TOKEN]',
    clientId: '[CLIENT ID]'
  });	     
});

```


## Authentication

You can obtain a client id registering a new Instagram API client app at http://instagr.am/developer/register/

## Options

### hash

Search recent photos tagged with `hash`.
See also http://instagram.com/developer/endpoints/tags/#get_tags_media_recent

Authentication: `clientId` required

Type: `String`

Default: `null`

### userId

Search recent by user `userId`.
See also http://instagram.com/developer/endpoints/users/#get_users_media_recent

Authentication: `accessToken` required.

Type: `String`

Default: `null`

### accessToken

OAuth 2 access token.
See also http://instagram.com/developer/auth/

Type: `String`

Default: `null`

### clientId

OAuth 2 client application id.
See also http://instagram.com/developer/auth/

Type: `String`

Default: `null`

### show

Number of photos to show.

Type: `Number`

Default: `null`

### onLoad

Called just before making the request to instagram API.

Type: `Function`

Default: `null`

### onComplete

Called after the response from instagram API.

Type: `Function`

Default: `null`