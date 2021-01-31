const Config=require("../config/production").Unsplash,Helpers=require("../util/helpers"),API_URL=Config.API_URL,ACCESS_KEY=Config.ACCESS_KEY,QUERIES=Config.QUERIES;function Photos(e){this.accessKey=e}function Search(e){this.accessKey=e}function Unsplash(e){this.accessKey=e||"",this.Photos=new Photos(this.accessKey),this.Search=new Search(this.accessKey)}Photos.prototype.Random=function(e,t){const s=API_URL+"/photos/random",o=`?client_id=${this.accessKey}&orientation=${e}&count=${t}&content_filter=high`;return Helpers.Request(s+o)},Photos.prototype.Download=function(e){const t=`?client_id=${this.accessKey}`;return Helpers.Request(e+t).then(Helpers.BinaryRequest).then(e=>Helpers.Base64ArrayBuffer(e))},Search.prototype.Photos=function(e,t,s,o){o||(o=Helpers.Random(QUERIES));const n=API_URL+"/search/photos",i=`?client_id=${this.accessKey}&query=${o}&orientation=${e}&page=${s}&per_page=${t}&content_filter=high`;return Helpers.Request(n+i)},module.exports=new Unsplash(ACCESS_KEY);