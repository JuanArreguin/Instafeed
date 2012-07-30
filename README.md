## Instafeed

www.juanarreguin.com/plugins/instafeed


A simple jQuery plugin to show a list of Instagram photos.

## Usage

Import the script

```html
<script src="jquery.instagram.js"></script>
```

Insert an empty `div` in the code

```html
<div id="instagram" class="container_full">
  <div class="feed"></div>
</div>
```

Run the plugin

```javascript

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