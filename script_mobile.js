(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"hash": "c37cd960fd93400014ac913e36b2661cc45815630daed7e0a1d1f1edf7291b17", "definitions": [{"items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE","camera":"this.panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_camera","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"aaEnabled":true,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile","viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePanoramaPlayer","arrowKeysAction":"translate","class":"PanoramaPlayer"},{"iconURL":"skin/IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD.png","toolTipFontSize":6,"right":"4.23%","toolTipTextShadowBlurRadius":1,"toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333333","propagateClick":false,"backgroundOpacity":0,"mode":"toggle","toolTipFontFamily":"Arial","transparencyActive":true,"data":{"name":"IconButton1493"},"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingLeft":3,"width":28,"toolTipFontColor":"#606060","height":17,"verticalAlign":"middle","horizontalAlign":"center","maxHeight":64,"toolTip":trans('IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile.toolTip'),"maxWidth":64,"toolTipBorderRadius":1,"class":"IconButton","toolTipPaddingRight":3,"tabIndex":0,"toolTipShadowBlurRadius":1,"id":"IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile","minWidth":1,"toolTipBorderColor":"#767676","minHeight":1,"bottom":"6.24%"},{"thumbnailUrl":"media/panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_t.jpg","label":trans('panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE.label'),"class":"Panorama","hfovMax":130,"vfov":180,"id":"panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE","frames":[{"thumbnailUrl":"media/panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":8,"colCount":48,"url":"media/panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_0/{face}/0/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel","width":24576},{"rowCount":4,"colCount":24,"url":"media/panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_0/{face}/1/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"rowCount":2,"colCount":12,"url":"media/panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"rowCount":1,"colCount":6,"url":"media/panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}],"class":"ImageResource"}}],"overlays":["this.overlay_EC51A7BF_DC8A_4216_41B8_F01DD8F158AF"],"hfov":360,"data":{"label":"N\u00e4k\u00f6torni 360"}},{"iconURL":"skin/IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F.png","left":"8.06%","propagateClick":false,"backgroundOpacity":0,"data":{"name":"IconButton14318"},"width":25.5,"height":22.25,"verticalAlign":"middle","horizontalAlign":"center","maxHeight":28,"maxWidth":28,"class":"IconButton","tabIndex":0,"id":"IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile","minWidth":1,"minHeight":1,"bottom":"6.17%"},{"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"minHeight":0,"gap":12,"closeButtonRollOverIconLineWidth":2,"closeButtonIconLineWidth":2,"bodyBorderSize":0,"closeButtonPaddingTop":0,"data":{"name":"Window25741"},"closeButtonRollOverBackgroundColorRatios":[0],"closeButtonPressedBackgroundOpacity":0,"headerPaddingRight":10,"verticalAlign":"middle","bodyBackgroundColorDirection":"vertical","scrollBarMargin":2,"layout":"vertical","closeButtonBorderColor":"#000000","shadow":true,"backgroundColorRatios":[],"width":300,"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"height":300,"modal":true,"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"titleFontColor":"#000000","closeButtonPressedBorderSize":0,"horizontalAlign":"center","closeButtonPaddingBottom":0,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"shadowVerticalLength":0,"closeButtonRollOverBorderColor":"#000000","footerBackgroundOpacity":1,"closeButtonRollOverIconColor":"#FFFFFF","headerBackgroundColorRatios":[0,0.09803921568627451,1],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"veilColor":["#000000","#000000"],"closeButtonPressedBorderColor":"#000000","veilColorRatios":[0,1],"class":"Window","titleFontFamily":"Arial","closeButtonBackgroundColor":[],"bodyBorderColor":"#000000","bodyPaddingLeft":5,"id":"window_ED55D582_DC8E_46EE_41E4_D2DEEFDAB4C9","headerPaddingLeft":10,"footerBackgroundColorDirection":"vertical","overflow":"scroll","headerBorderSize":0,"closeButtonBorderSize":0,"headerBackgroundColorDirection":"vertical","shadowColor":"#000000","propagateClick":false,"closeButtonIconColor":"#000000","titlePaddingRight":5,"bodyPaddingTop":5,"children":["this.htmlText_ED562582_DC8E_46EE_41C9_F728244E1329"],"headerBorderColor":"#000000","scrollBarColor":"#000000","veilColorDirection":"horizontal","closeButtonPressedBackgroundColor":["#3A1D1F"],"shadowOpacity":0.5,"bodyPaddingBottom":5,"closeButtonPressedBackgroundColorRatios":[0],"titlePaddingBottom":5,"headerBackgroundOpacity":1,"veilOpacity":0.4,"footerBorderColor":"#000000","closeButtonIconWidth":12,"closeButtonRollOverBackgroundOpacity":0,"headerVerticalAlign":"middle","titlePaddingTop":5,"closeButtonRollOverBackgroundColor":["#C13535"],"closeButtonPressedIconLineWidth":2,"closeButtonPressedIconColor":"#FFFFFF","footerHeight":5,"shadowHorizontalLength":3,"closeButtonIconHeight":12,"titleFontSize":"1.29vmin","titleHorizontalAlign":"left","shadowSpread":1,"footerBorderSize":0,"bodyBackgroundOpacity":1,"veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"closeButtonPaddingRight":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"headerPaddingTop":10,"titlePaddingLeft":5,"closeButtonBorderRadius":11,"closeButtonBackgroundColorRatios":[],"closeButtonBackgroundOpacity":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonRollOverBorderSize":0,"backgroundColor":[],"headerPaddingBottom":10,"closeButtonPaddingLeft":0,"bodyPaddingRight":5,"borderRadius":5,"minWidth":0},{"minHeight":25,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowBlurRadius":1,"toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","playbackBarHeight":10,"progressLeft":"33%","progressBackgroundColor":["#000000"],"playbackBarHeadWidth":6,"subtitlesTextShadowVerticalLength":1,"subtitlesTop":0,"playbackBarBackgroundOpacity":1,"progressBottom":10,"playbackBarBackgroundColorDirection":"vertical","subtitlesBottom":50,"toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"progressBorderSize":0,"subtitlesTextShadowColor":"#000000","progressHeight":2,"playbackBarRight":0,"playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"height":"100%","playbackBarProgressBorderRadius":0,"progressBarBorderSize":0,"width":"100%","playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","subtitlesGap":0,"subtitlesFontSize":"3vmin","vrPointerSelectionColor":"#FF6600","subtitlesTextShadowHorizontalLength":1,"vrThumbstickRotationStep":20,"vrPointerSelectionTime":2000,"class":"ViewerArea","playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":1.5,"toolTipShadowBlurRadius":1,"id":"MainViewer_mobile","toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressRight":"33%","propagateClick":false,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":3,"playbackBarHeadHeight":15,"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"progressOpacity":0.7,"firstTransitionDuration":0,"playbackBarHeadShadow":true,"progressBarBackgroundColorDirection":"horizontal","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarHeadBorderColor":"#000000","progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesFontFamily":"Arial","playbackBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderRadius":1,"playbackBarBottom":5,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBorderRadius":2,"minWidth":50,"toolTipPaddingRight":3,"toolTipBorderColor":"#767676"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":100.98,"pitch":-1.64,"class":"PanoramaCameraPosition"},"id":"panorama_EA9DBDB1_DC9A_462A_41C0_4B90DC1DC5AE_camera","initialSequence":"this.sequence_E5999E4D_DC9A_427A_41D4_72721671293E","class":"PanoramaCamera","automaticRotationSpeed":5},{"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Image"},"useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","data":{"label":"Image"},"vfov":8.84,"image":"this.res_F6218EFA_DC8F_C21E_41D8_517A8CCF550D","pitch":-25.06,"yaw":-80.66,"scaleMode":"fit_inside","hfov":10.5}],"id":"overlay_EC51A7BF_DC8A_4216_41B8_F01DD8F158AF","areas":["this.HotspotPanoramaOverlayArea_EE0E682C_DC8A_4E3A_41C3_B1E0F135F79D"]},{"propagateClick":false,"backgroundOpacity":0,"scrollBarColor":"#000000","paddingLeft":10,"data":{"name":"HTMLText25742"},"height":"100%","width":"100%","paddingRight":10,"scrollBarVisible":"always","html":trans('htmlText_ED562582_DC8E_46EE_41C9_F728244E1329.html'),"paddingTop":10,"paddingBottom":10,"scrollBarHorizontalMargin":-3,"class":"HTMLText","id":"htmlText_ED562582_DC8E_46EE_41C9_F728244E1329","minWidth":0,"minHeight":0},{"id":"sequence_E5999E4D_DC9A_427A_41D4_72721671293E","movements":[{"easing":"cubic_in","yawSpeed":5.31,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":5.31,"class":"DistancePanoramaCameraMovement","yawDelta":1043},{"easing":"cubic_out","yawSpeed":5.31,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"class":"ImageResource","id":"res_F6218EFA_DC8F_C21E_41D8_517A8CCF550D","levels":[{"url":"media/res_F6218EFA_DC8F_C21E_41D8_517A8CCF550D_0.png","height":101,"class":"ImageResourceLevel","width":120}]},{"id":"HotspotPanoramaOverlayArea_EE0E682C_DC8A_4E3A_41C3_B1E0F135F79D","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.showWindow(this.window_ED55D582_DC8E_46EE_41E4_D2DEEFDAB4C9, null, false)"}],"data":{"history":{},"locales":{"en":"locale/en.txt"},"displayTooltipInTouchScreens":true,"name":"Player6522","textToSpeechConfig":{"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false},"defaultLocale":"en","initialScale":0.5},"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile], 'cardboardAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","buttonToggleFullscreen":"this.IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile","backgroundColorRatios":[0],"scrollBarMargin":2,"width":"100%","scrollBarColor":"#000000","height":"100%","scripts":{"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getKey":TDV.Tour.Script.getKey,"playAudioList":TDV.Tour.Script.playAudioList,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"mixObject":TDV.Tour.Script.mixObject,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"downloadFile":TDV.Tour.Script.downloadFile,"startMeasurement":TDV.Tour.Script.startMeasurement,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"existsKey":TDV.Tour.Script.existsKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"executeJS":TDV.Tour.Script.executeJS,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"registerKey":TDV.Tour.Script.registerKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"init":TDV.Tour.Script.init,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"isPanorama":TDV.Tour.Script.isPanorama,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setLocale":TDV.Tour.Script.setLocale,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoBack":TDV.Tour.Script.historyGoBack,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"createTween":TDV.Tour.Script.createTween,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupImage":TDV.Tour.Script.showPopupImage,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizStart":TDV.Tour.Script.quizStart,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"enableVR":TDV.Tour.Script.enableVR,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"initAnalytics":TDV.Tour.Script.initAnalytics,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showWindow":TDV.Tour.Script.showWindow,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"disableVR":TDV.Tour.Script.disableVR,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"toggleVR":TDV.Tour.Script.toggleVR},"gap":10,"layout":"absolute","watermark":false,"children":["this.MainViewer_mobile","this.IconButton_9162DC57_BC8F_C616_41C5_0DD9D2CCEADD_mobile","this.IconButton_929C7D04_BC8E_C7EA_41DE_E09D6F8B913F_mobile"],"backgroundColor":["#FFFFFF"],"class":"Player","id":"rootPlayer","minWidth":0,"minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.16.js.map
})();
//Generated with v2024.0.16, Fri Oct 25 2024