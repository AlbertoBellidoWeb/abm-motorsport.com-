(("undefined"!=typeof self?self:this).webpackJsonp_pro_gallery_santa_wrapper=("undefined"!=typeof self?self:this).webpackJsonp_pro_gallery_santa_wrapper||[]).push([[1],{325:function(e,r,t){"use strict";t.r(r);var l=t(0),a=t(16),n=t(225),s=t(8),i=t(107),p=function(){function e(e,r){this.galleryWrapper=e,this.galleryWrapperProps=r,this.update=this.update.bind(this),this.handleEvent=this.handleEvent.bind(this),this.handleFullscreenEvent=this.handleFullscreenEvent.bind(this)}return e.prototype.update=function(e){this.galleryWrapperProps=e},e.prototype.handleEvent=function(e,r,t){return Object(l.b)(this,void 0,void 0,(function(){return Object(l.d)(this,(function(l){switch(l.label){case 0:switch(e){case a.a.events.LOAD_MORE_CLICKED:return[3,1];case a.a.events.ITEM_ACTION_TRIGGERED:return[3,2];case a.a.events.CURRENT_ITEM_CHANGED:return[3,3];case a.a.events.NEED_MORE_ITEMS:return[3,4];case a.a.events.SHARE_BUTTON_CLICKED:return[3,5];case i.a.SOCIAL_SHARE_BUTTON_CLICKED:return[3,7];case a.a.events.TEXT_DOWNLOAD_BUTTON_CLICKED:return[3,8];case a.a.events.LOVE_BUTTON_CLICKED:return[3,10];case a.a.events.ITEM_CLICKED:return[3,14];case a.a.events.DOWNLOAD_BUTTON_CLICKED:return[3,15];case i.a.CUSTOM_BUTTON_CLICKED:return[3,16];case a.a.events.THUMBNAIL_CLICKED:return[3,17]}return[3,18];case 1:return this.galleryWrapper.loadMoreClicked=!0,[3,19];case 2:return this.galleryWrapper.itemActionsHelper.onItemActionTriggered(r,this.galleryWrapper.siteHelper.getPGStyles()),[3,19];case 3:return this.galleryWrapper.itemActionsHelper.onCurrentItemChanged(r),[3,19];case 4:return this.galleryWrapper.itemsHelper.getMoreItems(r),[3,19];case 5:return[4,this.galleryWrapper.itemActionsHelper.handleItemActions("share",r)];case 6:return l.sent(),this.galleryWrapper.logHelper.reportBiEvent("share",r,"gallery"),[3,19];case 7:return this.galleryWrapper.toggleSocialShareScreen(r.showSocialSharePopup,r),this.galleryWrapper.logHelper.reportBiEvent("info",r,"gallery"),[3,19];case 8:return[4,this.galleryWrapper.itemActionsHelper.handleItemActions("downloadTextItem",r)];case 9:return l.sent(),this.galleryWrapper.logHelper.reportBiEvent("downloadTextItem",r,"gallery"),[3,19];case 10:return this.galleryWrapper.itemActionsHelper.updateLocalLoveData(r.id),[4,this.galleryWrapper.itemActionsHelper.handleItemActions("postLoveActivity",r)];case 11:return l.sent(),[4,this.galleryWrapper.itemActionsHelper.useItemActions("isLoved",r.id)];case 12:return l.sent()||this.galleryWrapper.logHelper.reportBiEvent("love",r,"gallery"),[4,this.galleryWrapper.itemActionsHelper.handleItemActions("toggleLove",r)];case 13:return l.sent(),[3,19];case 14:return this.galleryWrapper.itemActionsHelper.onItemClicked(r,t),this.galleryWrapper.logHelper.reportBiEvent("onItemClicked",r,"gallery"),[3,19];case 15:return this.galleryWrapper.logHelper.reportBiEvent("onDownloadButtonClicked",r,"gallery"),[3,19];case 16:return this.galleryWrapper.isStoreGallery()?this.galleryWrapper.logHelper.reportBiEvent("onBuyNowClicked",r,"gallery"):this.galleryWrapper.logHelper.reportBiEvent("onPGCustomButtonClicked",r,"gallery"),[3,19];case 17:return this.galleryWrapper.logHelper.reportBiEvent("onThumbnailClicked",r,"gallery"),[3,19];case 18:s.b.isVerbose()&&console.log(e,"is not handled in handleEvent function"),l.label=19;case 19:return[2]}}))}))},e.prototype.handleFullscreenEvent=function(e,r){return Object(l.b)(this,void 0,void 0,(function(){return Object(l.d)(this,(function(t){switch(t.label){case 0:switch(e){case n.a.UPDATE_CURRENT_ITEM:return[3,1];case n.a.CLOSE_FULLSCREEN:return[3,3];case n.a.NEED_MORE_ITEMS:return[3,4];case n.a.TOGGLE_BROWSER_FULLSCREEN:return[3,5];case n.a.NAVIGATE:return[3,6];case n.a.FULLSCREEN_LOADED:return[3,7];case n.a.SHARE_BUTTON_CLICKED:return[3,8];case n.a.SOCIAL_SHARE_BUTTON_CLICKED:return[3,10];case n.a.TEXT_DOWNLOAD_BUTTON_CLICKED:return[3,11];case n.a.DOWNLOAD_BUTTON_CLICKED:return[3,13];case n.a.LOVE_BUTTON_CLICKED:return[3,14]}return[3,18];case 1:return[4,this.galleryWrapper.fullscreenHelper.updateFullscreenCurrentItem(r.item)];case 2:return t.sent(),[3,19];case 3:return this.galleryWrapper.fullscreenHelper.animatedCloseFullscreen(r.itemIdx,r.animationDuration),[3,19];case 4:return this.galleryWrapper.itemsHelper.getMoreItems(r),[3,19];case 5:return this.galleryWrapper.fullscreenHelper.toggleBrowserFullscreen(),[3,19];case 6:return this.galleryWrapper.itemActionsHelper.onLinkNavigation(r),[3,19];case 7:return this.galleryWrapper.logHelper.reportBiEvent("item_expanded",r,"fullscreen"),[3,19];case 8:return[4,this.galleryWrapper.itemActionsHelper.handleItemActions("share",r)];case 9:return t.sent(),this.galleryWrapper.logHelper.reportBiEvent("share",r,"fullscreen"),[3,19];case 10:return this.galleryWrapper.toggleSocialShareScreen(r.showSocialSharePopup,r),this.galleryWrapper.logHelper.reportBiEvent("info",r,"fullscreen"),[3,19];case 11:return[4,this.galleryWrapper.itemActionsHelper.handleItemActions("downloadTextItem",r)];case 12:return t.sent(),this.galleryWrapper.logHelper.reportBiEvent("downloadTextItem",r,"fullscreen"),[3,19];case 13:return this.galleryWrapper.logHelper.reportBiEvent("onDownloadButtonClicked",r,"fullscreen"),[3,19];case 14:return this.galleryWrapper.itemActionsHelper.updateLocalLoveData(r.id),[4,this.galleryWrapper.itemActionsHelper.handleItemActions("postLoveActivity",r)];case 15:return t.sent(),[4,this.galleryWrapper.itemActionsHelper.useItemActions("isLoved",r.id)];case 16:return t.sent()||this.galleryWrapper.logHelper.reportBiEvent("love",r,"fullscreen"),[4,this.galleryWrapper.itemActionsHelper.handleItemActions("toggleLove",r)];case 17:return t.sent(),[3,19];case 18:s.b.isVerbose()&&console.log(e,"is not handled in handleEvent function"),t.label=19;case 19:return[2]}}))}))},e}();r.default=p}}]);
//# sourceMappingURL=AsyncEventHandler.chunk.min.js.map