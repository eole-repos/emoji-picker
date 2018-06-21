(function (root, factory) {
  module.exports = factory(require('./emoji-data-by-category.js'), require('./emoji.js'));
})(this, function (EmojiDataByCategory, EmojiConvertor) {
  var wdtEmojiBundle = {};

  wdtEmojiBundle.defaults = {
    pickerColors : ['green', 'pink', 'yellow', 'blue', 'gray'],
    textMode     : true,
    disabledCategories: ['Skin Tones'],
    sectionOrders: {
      'Recent'  : 10,
      'Custom'  : 9,
      'People'  : 8,
      'Nature'  : 7,
      'Foods'   : 6,
      'Activity': 5,
      'Places'  : 4,
      'Objects' : 3,
      'Symbols' : 2,
      'Flags'   : 1
    },
    skinColor    : 'skin-1',
    allowNative  : false,
    emojiType    : 'apple',
    emojiSheets: {
      'apple'    : '/sheets/sheet_apple_64_indexed_128.png',
      'google'   : '/sheets/sheet_google_64_indexed_128.png',
      'twitter'  : '/sheets/sheet_twitter_64_indexed_128.png',
      'emojione' : '/sheets/sheet_emojione_64_indexed_128.png',
      'facebook' : '/sheets/sheet_facebook_64_indexed_128.png',
      'messenger': '/sheets/sheet_messenger_64_indexed_128.png',
      'custom'   : '/talk/custom-emoji/'
    },
    customEmojiShortCodes: ["raku-ok", "raku-ok2", "raku-ng", "raku-ng2", "raku-panic", "raku-smile", "raku-sleep", "raku-bow", "raku-sleep2", "raku-surprised", "raku-shock", "raku-side", "raku-normal", "raku-side2", "raku-side3", "raku-side4", "raku-side5", "raku-back", "raku-love", "raku-sleep3", "raku-extra", "raku-extra2", "raku-extra3", "raku-anger", "raku-extra10", "raku-extra11", "raku-extra12", "raku-extra13", "raku-extra14", "raku-extra4", "raku-extra5", "raku-extra6", "raku-extra7", "raku-extra8", "raku-extra9", "raku-handstand", "raku-love2", "raku-love3", "raku-ng3", "raku-ng4", "raku-ng5", "raku-ok3", "raku-ok4", "raku-ok5", "raku-present", "raku-shock2", "raku-shock3", "raku-side6", "raku-smile2", "raku-smile3", "raku-smile4", "raku-smile5", "raku-sports", "raku-sports2", "raku-sports3", "raku-sports4", "raku-sports5", "raku-sports6", "raku-sports7", "raku-surprised"],
    emojiData: {"Custom":[{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ok","short_names":["raku-ok"],"sort_order":1},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ng","short_names":["raku-ng"],"sort_order":2},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ok2","short_names":["raku-ok2"],"sort_order":3},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ng2","short_names":["raku-ng2"],"sort_order":4},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-panic","short_names":["raku-panic"],"sort_order":5},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-smile","short_names":["raku-smile"],"sort_order":6},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sleep","short_names":["raku-sleep"],"sort_order":7},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-bow","short_names":["raku-bow"],"sort_order":8},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sleep2","short_names":["raku-sleep2"],"sort_order":9},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-surprised","short_names":["raku-surprised"],"sort_order":10},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-shock","short_names":["raku-shock"],"sort_order":11},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-side","short_names":["raku-side"],"sort_order":12},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-normal","short_names":["raku-normal"],"sort_order":13},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-side2","short_names":["raku-side2"],"sort_order":14},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-side3","short_names":["raku-side3"],"sort_order":15},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-side4","short_names":["raku-side4"],"sort_order":16},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-side5","short_names":["raku-side5"],"sort_order":17},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-back","short_names":["raku-back"],"sort_order":18},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-love","short_names":["raku-love"],"sort_order":19},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sleep3","short_names":["raku-sleep3"],"sort_order":20},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra","short_names":["raku-extra"],"sort_order":21},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra2","short_names":["raku-extra2"],"sort_order":22},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra3","short_names":["raku-extra3"],"sort_order":23},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-anger","short_names":["raku-anger"],"sort_order":24},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra10","short_names":["raku-extra10"],"sort_order":25},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra11","short_names":["raku-extra11"],"sort_order":26},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra12","short_names":["raku-extra12"],"sort_order":27},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra13","short_names":["raku-extra13"],"sort_order":28},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra14","short_names":["raku-extra14"],"sort_order":29},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra4","short_names":["raku-extra4"],"sort_order":30},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra5","short_names":["raku-extra5"],"sort_order":31},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra6","short_names":["raku-extra6"],"sort_order":32},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra7","short_names":["raku-extra7"],"sort_order":33},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra8","short_names":["raku-extra8"],"sort_order":34},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-extra9","short_names":["raku-extra9"],"sort_order":35},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-handstand","short_names":["raku-handstand"],"sort_order":36},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-love2","short_names":["raku-love2"],"sort_order":37},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-love3","short_names":["raku-love3"],"sort_order":38},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ng3","short_names":["raku-ng3"],"sort_order":39},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ng4","short_names":["raku-ng4"],"sort_order":40},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ng5","short_names":["raku-ng5"],"sort_order":41},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ok3","short_names":["raku-ok3"],"sort_order":42},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ok4","short_names":["raku-ok4"],"sort_order":43},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-ok5","short_names":["raku-ok5"],"sort_order":44},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-present","short_names":["raku-present"],"sort_order":45},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-shock2","short_names":["raku-shock2"],"sort_order":46},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-shock3","short_names":["raku-shock3"],"sort_order":47},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-side6","short_names":["raku-side6"],"sort_order":48},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-smile2","short_names":["raku-smile2"],"sort_order":49},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-smile3","short_names":["raku-smile3"],"sort_order":50},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-smile4","short_names":["raku-smile4"],"sort_order":51},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-smile5","short_names":["raku-smile5"],"sort_order":52},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sports","short_names":["raku-sports"],"sort_order":53},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sports2","short_names":["raku-sports2"],"sort_order":54},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sports3","short_names":["raku-sports3"],"sort_order":55},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sports4","short_names":["raku-sports4"],"sort_order":56},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sports5","short_names":["raku-sports5"],"sort_order":57},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sports6","short_names":["raku-sports6"],"sort_order":58},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-sports7","short_names":["raku-sports7"],"sort_order":59},{"is_custom_emoji":true,"name":"ラック","short_name":"raku-surprised","short_names":["raku-surprised"],"sort_order":60}]}};

  /**
   * Init the bundle with 1, YAY!
   */
  wdtEmojiBundle.init = function () {
    var self = this;

    // emoji.js overrides
    self.emoji = new EmojiConvertor();

    self.emoji.allow_native = this.defaults.allowNative;
    self.emoji.img_set = this.defaults.emojiType;
    self.emoji.use_sheet = true;
    self.emoji.supports_css = true;
    self.emoji.img_sets['apple']['sheet'] = this.defaults.emojiSheets.apple;
    self.emoji.img_sets['google']['sheet'] = this.defaults.emojiSheets.google;
    self.emoji.img_sets['twitter']['sheet'] = this.defaults.emojiSheets.twitter;
    self.emoji.img_sets['emojione']['sheet'] = this.defaults.emojiSheets.emojione;
    self.emoji.img_sets['facebook']['sheet'] = this.defaults.emojiSheets.facebook;
    self.emoji.img_sets['messenger']['sheet'] = this.defaults.emojiSheets.messenger;
    self.emoji.img_sets['custom_path'] = this.defaults.emojiSheets.custom;

    self.searchPopup = document.querySelector('#wdt-emoji-search-popup');
    self.ranges = {};
    for (var category in EmojiDataByCategory.emojiDataByCategory) {
      self.defaults.emojiData[category] = EmojiDataByCategory.emojiDataByCategory[category];
    }

    return self;
  };

  /**
   *
   */
  wdtEmojiBundle.initEmojiSearchPopup = function (selector) {
    var self = this;
    self.ranges = {};
    self.selector = selector;
    self.elements = document.querySelectorAll(selector);

    if (this.elements.length) {
      for (var i = 0; i < self.elements.length; i++) {

        var el = self.elements[i];
        if (el.getAttribute('contenteditable')) {
          el.addEventListener('keypress', function(ele) {
            if (ele.target.innerHTML == '<br>' || ele.target.innerHTML == '')
              ele.target.innerHTML = '<div><br></div>';
          });

          el.addEventListener('paste', function(ele) {
            ele.preventDefault();
            ele.stopPropagation();
            if (ele.target.getAttribute('contenteditable')) {
              if (ele.target.innerHTML == '<br>' || ele.target.innerHTML == '')
                ele.target.innerHTML = '<div><br></div>';
            }
            let paste = (ele.clipboardData || window.clipboardData).getData('text');
            document.execCommand('insertText', false, paste);
          });

          el.dataset.rangeIndex = i;
          wdtEmojiBundle.addRangeStore(el);
      }

        if (hasClass(el, 'wdt-emoji-open-on-colon')) {
          parent.addEventListener('keyup', wdtEmojiBundle.onKeyup)
        }
      }
    }
    self.bindEmojiSearchEvents();
    return self;
  };

  wdtEmojiBundle.initEmojiPicker = function() {
    self = this;
    self.popup = document.querySelector('.wdt-emoji-popup');
    self.scroller = self.popup.querySelector('.wdt-emoji-scroll-wrapper');
    self.previewImg = self.popup.querySelector('#wdt-emoji-preview-img');
    self.previewName = self.popup.querySelector('#wdt-emoji-preview-name');
    self.previewAliases = self.popup.querySelector('#wdt-emoji-preview-aliases');

    document.querySelector('body').dataset.wdtEmojiBundle = wdtEmojiBundle.defaults.emojiType;
/*
    var recent = self.popup.querySelector('[data-group-name="Recent"]');
    if (recent)
        recent.innerHTML = self.emoji.replace_colons(':clock3:');

    var people = self.popup.querySelector('[data-group-name="People"]');
    if (people)
        people.innerHTML = self.emoji.replace_colons(':sunglasses:');

    var nature = self.popup.querySelector('[data-group-name="Nature"]');
    if (nature)
      nature.innerHTML = self.emoji.replace_colons(':shamrock:');

    var foods = self.popup.querySelector('[data-group-name="Foods"]');
    if (foods)
        foods.innerHTML = self.emoji.replace_colons(':pizza:');

    var activity = self.popup.querySelector('[data-group-name="Activity"]');
    if (activity)
        activity.innerHTML = self.emoji.replace_colons(':football:');

    var places = self.popup.querySelector('[data-group-name="Places"]');
    if (places)
        places.innerHTML = self.emoji.replace_colons(':airplane:');

    var objects = self.popup.querySelector('[data-group-name="Objects"]');
    if (objects)
        objects.innerHTML = self.emoji.replace_colons(':bulb:');

    var symbols = self.popup.querySelector('[data-group-name="Symbols"]');
    if (symbols)
        symbols.innerHTML = self.emoji.replace_colons(':heart:');

    var flags = self.popup.querySelector('[data-group-name="Flags"]');
    if (flags)
        flags.innerHTML = self.emoji.replace_colons(':waving_white_flag:');

    var custom = self.popup.querySelector('[data-group-name="Custom"]');
    if (custom)
        custom.innerHTML = this.replace_custom_emoji(':raku-normal:');
*/
  };

  wdtEmojiBundle.closeEmojiSearchPopup = function () {
    var emojiSearchResults = document.querySelector('.wdt-emoji-search-results');
    emojiSearchResults.innerHTML = "";
    var emojiSearchPopup = document.querySelector('#wdt-emoji-search-popup');
    removeClass(emojiSearchPopup, "emoji-search-lists")
  };

  wdtEmojiBundle.onKeyup = function (ev) {
    var element = ev.target,
        selection = document.getSelection(),
        curRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null,
        val = curRange != null ? curRange.startContainer.data : "",
        textBeforeCursor = typeof val == "string" && val != "" ? val.substring(0, selection.anchorOffset) : "",
        // `<space>:` OR `^:` followed by text
        // text is captured
        matches = textBeforeCursor.match(/(\s|^):(\S*)$/),
        text = matches && matches[2];

    wdtEmojiBundle.input = element;
    wdtEmojiBundle.currentRange = curRange;

    if (!text || text.length < 2) {
      wdtEmojiBundle.closeEmojiSearchPopup();
      return;
    }

    var emojiSearchPopup = document.querySelector('#wdt-emoji-search-popup');
    removeClass(emojiSearchPopup, 'emoji-search-lists');
    var emojiSearchResults = document.querySelector('.wdt-emoji-search-results');
    emojiSearchResults.innerHTML = "";
    
    for (var category in wdtEmojiBundle.defaults.emojiData) {
      var emojiList = wdtEmojiBundle.defaults.emojiData[category];
      for (var i = 0; i < emojiList.length; i++) {
        var em = emojiList[i];
        if (em.has_img_apple || em.has_img_emojione || em.has_img_google || em.has_img_twitter || em.has_img_facebook || em.has_img_messenger || em.is_custom_emoji) {}
        else continue;
        var wdtEmojiShortnames = ':' + em.short_names.join(': :') + ':';
        if (wdtEmojiShortnames.match(new RegExp(text, "gi"))) {
          var emojiLink = document.createElement('a');

          addClass(emojiSearchPopup, 'emoji-search-lists');
          addClass(emojiLink, 'wdt-emoji emoji-clickable');
          addClass(emojiLink, wdtEmojiBundle.getRandomPickerColor());

          if (em.hasOwnProperty("is_custom_emoji")) {
            emojiLink.dataset.isCustomEmoji = em.is_custom_emoji;
          } else {
            emojiLink.dataset.hasImgApple = em.has_img_apple;
            emojiLink.dataset.hasImgEmojione = em.has_img_emojione;
            emojiLink.dataset.hasImgGoogle = em.has_img_google;
            emojiLink.dataset.hasImgTwitter = em.has_img_twitter;
            emojiLink.dataset.hasImgFacebook = em.has_img_facebook;
            emojiLink.dataset.hasImgMessenger = em.has_img_messenger;
          }
          emojiLink.dataset.wdtEmojiName = em.name;
          emojiLink.dataset.wdtEmojiShortnames = ':' + em.short_names.join(': :') + ':';
          emojiLink.dataset.wdtEmojiShortname = em.short_name;
          emojiLink.dataset.wdtEmojiOrder = em.sort_order;

          if (em.hasOwnProperty("is_custom_emoji")) {
            emojiLink.innerHTML = replaceCustomEmojiColon(wdtEmojiBundle.emoji.img_sets["custom_path"], em.short_name);
          } else {
            emojiLink.innerHTML = wdtEmojiBundle.emoji.replace_colons(':' + em.short_name + ':');
          }

          var emojiLinkOuter = emojiLink.querySelector('.emoji-outer');
          addClass(emojiLinkOuter, 'emoji-size-medium');

          emojiSearchResults.appendChild(emojiLink);
        }
      }
    }
  };

  /**
   *
   * @param ev
   * @returns {boolean}
   */
  wdtEmojiBundle.openPicker = function (ev) {
    var self = this;

    wdtEmojiBundle.input = document.querySelector("#room_detail_message_form");

    // @todo - [needim] - popup must be visible in viewport calculate carefully
    function findBestAvailablePosition(el) {

      var bodyRect = document.body.getBoundingClientRect();
      var elRect = el.getBoundingClientRect();
      var popupRect = wdtEmojiBundle.popup.getBoundingClientRect();

      var pos = {
        left: (elRect.left - popupRect.width) + elRect.width,
        top : elRect.top + Math.abs(bodyRect.top) + elRect.height
      };

      pos.left = pos.left < 0 ? 0 : pos.left;

      pos.left += 'px';
      pos.top += 'px';

      if (bodyRect.width < 415) { // mobile specific @todo - [needim] - better mobile detection needed
        addClass(wdtEmojiBundle.popup, 'wdt-emoji-mobile');

        return {
          left    : '0px',
          bottom  : '0px',
          top     : 'auto',
          width   : '100%',
          position: 'relative'
        }
      }

      return pos;
    }

    css(wdtEmojiBundle.popup, findBestAvailablePosition(ev.target));

    // On window resized
    window.addEventListener('resize', function(new_event){
      css(wdtEmojiBundle.popup, findBestAvailablePosition(ev.target));
    });

    addClass(wdtEmojiBundle.popup, 'open');

    // fill with emoji
    wdtEmojiBundle.fillPickerPopup();

    if (hasClass(this, 'wdt-emoji-picker-open')) {
      wdtEmojiBundle.closePicker(this);
      return false;
    }

    wdtEmojiBundle.closePickers();

    addClass(this, 'wdt-emoji-picker-open');
    // this.innerHTML = wdtEmojiBundle.emoji.replace_colons(':sunglasses:');
  };

  /**
   *
   * Main function to fill picker popup with emoji
   *
   * @returns void | boolean | mixed
   */
  wdtEmojiBundle.fillPickerPopup = function () {

    var self = this;

    if (hasClass(this.popup, 'ready'))
      return false;

    // @todo - [needim] - Support for recent and custom emoji list
    var sectionsContainer = this.popup.querySelector('.wdt-emoji-sections'),
      sections = {'Recent': []},
      sortedSections = [];

    for (var category in wdtEmojiBundle.defaults.emojiData) {
      if (category != "Custom") continue;
      if (wdtEmojiBundle.defaults.emojiData.hasOwnProperty(category)) {

        if (inArray(category, wdtEmojiBundle.defaults.disabledCategories))
          continue;

        emojiList = wdtEmojiBundle.defaults.emojiData[category];
        sections[category] = emojiList;
      }
    }

    var sortedSectionsArray = Object.keys(sections).sort(function (a, b) {
      return wdtEmojiBundle.defaults.sectionOrders[a] < wdtEmojiBundle.defaults.sectionOrders[b] ? 1 : -1;
    });

    for (var i = 0; i < sortedSectionsArray.length; i++) {
      sortedSections[sortedSectionsArray[i]] = sections[sortedSectionsArray[i]];
    }

    for (var title in sortedSections) {
      if (sortedSections.hasOwnProperty(title)) {
        var emojiList = sortedSections[title];

        if (emojiList.length) {
          var emojiSection = document.createElement('div'),
            emojiTitle = document.createElement('h3'),
            emojiListDiv = document.createElement('div');

          emojiTitle.innerHTML = "ラックと仲間たち";//title;
          emojiTitle.dataset.emojiGroup = title;
          emojiListDiv.dataset.emojiGroup = title;

          addClass(emojiListDiv, 'wdt-emoji-list');
          addClass(emojiSection, 'wdt-emoji-section');

          for (i = 0; i < emojiList.length; i++) {
            var em = emojiList[i];

            if (em.has_img_apple || em.has_img_emojione || em.has_img_google || em.has_img_twitter || em.has_img_facebook || em.has_img_messenger || em.is_custom_emoji) {
              var emojiLink = document.createElement('a');

              addClass(emojiLink, 'wdt-emoji emoji-clickable');
              addClass(emojiLink, wdtEmojiBundle.getRandomPickerColor());

              if (em.hasOwnProperty("is_custom_emoji")) {
                emojiLink.dataset.isCustomEmoji = em.is_custom_emoji;
              } else {
                emojiLink.dataset.hasImgApple = em.has_img_apple;
                emojiLink.dataset.hasImgEmojione = em.has_img_emojione;
                emojiLink.dataset.hasImgGoogle = em.has_img_google;
                emojiLink.dataset.hasImgTwitter = em.has_img_twitter;
                emojiLink.dataset.hasImgFacebook = em.has_img_facebook;
                emojiLink.dataset.hasImgMessenger = em.has_img_messenger;
              }
              emojiLink.dataset.wdtEmojiName = em.name;
              emojiLink.dataset.wdtEmojiShortnames = ':' + em.short_names.join(': :') + ':';
              emojiLink.dataset.wdtEmojiShortname = em.short_name;
              emojiLink.dataset.wdtEmojiOrder = em.sort_order;

              if (em.hasOwnProperty("is_custom_emoji")) {
                emojiLink.innerHTML = replaceCustomEmojiColon(wdtEmojiBundle.emoji.img_sets["custom_path"], em.short_name);
              } else {
                emojiLink.innerHTML = self.emoji.replace_colons(':' + em.short_name + ':');
              }

              var emojiLinkOuter = emojiLink.querySelector('.emoji-outer');
              addClass(emojiLinkOuter, 'emoji-size-large');

              emojiListDiv.appendChild(emojiLink);
            }
          }

          emojiSection.appendChild(emojiTitle);
          emojiSection.appendChild(emojiListDiv);
          sectionsContainer.appendChild(emojiSection);
        }
      }
    }

    addClass(this.popup, 'ready');

    wdtEmojiBundle.bindEvents();
  };

  /**
   * Random css class getter for picker hover colors
   * @returns string
   */
  wdtEmojiBundle.getRandomPickerColor = function () {
    return wdtEmojiBundle.defaults.pickerColors[Math.floor(Math.random() * wdtEmojiBundle.defaults.pickerColors.length)]
  };

  /**
   * Close the bundle popup
   */
  wdtEmojiBundle.close = function () {
    wdtEmojiBundle.closePickers();
    wdtEmojiBundle.closeEmojiSearchPopup();
  };


  /**
   * Closes all the pickers
   */
  wdtEmojiBundle.closePickers = function () {
    var openPickers = document.querySelectorAll('.wdt-emoji-picker-open');
    if (openPickers.length) {
      for (var i = 0; i < openPickers.length; i++) {
        wdtEmojiBundle.closePicker(openPickers[i]);
      }
    }
  };

  /**
   *
   * @param element
   */
  wdtEmojiBundle.closePicker = function (element) {
    removeClass(element, 'wdt-emoji-picker-open');
    var localPopup = document.querySelector('.wdt-emoji-popup');
    if (localPopup) {
      removeClass(localPopup, 'open')
    }
  };


  /**
   * void function binds some events for the bundle
   */
  wdtEmojiBundle.bindEmojiSearchEvents = function () {
    var emojiSearchElement = document.querySelector('.wdt-emoji-search-results');

    live(emojiSearchElement, 'click', '.wdt-emoji-search-results a.wdt-emoji', function (event) {
      event.preventDefault();
      var selection = getSelection(wdtEmojiBundle.input);
      var emojiImgHtml = genEmojiImageHtml(wdtEmojiBundle.emoji, wdtEmojiBundle.defaults.customEmojiShortCodes, this.dataset.wdtEmojiShortname);

      replaceText(wdtEmojiBundle.input, wdtEmojiBundle.currentRange, selection, ':' + this.dataset.wdtEmojiShortname + ':', emojiImgHtml);
      fire('select', {el: wdtEmojiBundle.input, event: event, emoji: ':' + this.dataset.wdtEmojiShortname + ':'});

      var ce = document.createEvent('Event');
      ce.initEvent('input', true, true);
      wdtEmojiBundle.input.dispatchEvent(ce);
      wdtEmojiBundle.closeEmojiSearchPopup();
      fire('afterSelect', {el: wdtEmojiBundle.input, event: event, emoji: ':' + this.dataset.wdtEmojiShortname + ':'});

      return false;
    });
  };

  /**
   * void function binds some events for the bundle
   */
  wdtEmojiBundle.bindEvents = function () {
    var self = this;
    var emojiList = document.querySelector('.wdt-emoji-list');
    live(emojiList, 'click', '.wdt-emoji-list a.wdt-emoji', function (event) {
      event.preventDefault();
      var selection = getSelection(wdtEmojiBundle.input);
      var emojiHtml = genEmojiImageHtml(wdtEmojiBundle.emoji, wdtEmojiBundle.defaults.customEmojiShortCodes, this.dataset.wdtEmojiShortname);

      insertText(wdtEmojiBundle.input, selection, ':' + this.dataset.wdtEmojiShortname + ':', emojiHtml);
      fire('select', {el: wdtEmojiBundle.input, event: event, emoji: ':' + this.dataset.wdtEmojiShortname + ':'});

      var ce = document.createEvent('Event');
      ce.initEvent('input', true, true);
      wdtEmojiBundle.input.dispatchEvent(ce);
      wdtEmojiBundle.close();
      fire('afterSelect', {el: wdtEmojiBundle.input, event: event, emoji: ':' + this.dataset.wdtEmojiShortname + ':'});

      return false;
    });
  };

  /**
   *
   * @type {{select: Array, afterSelect: Array, afterPickerOpen: Array}}
   */
  wdtEmojiBundle.dispatchHandlers = {
    'select'         : [],
    'afterSelect'    : [],
    'afterPickerOpen': [] // not implemented
  };

  /**
   *
   * @param eventName
   * @param handler
   * @returns mixed
   */
  wdtEmojiBundle.on = function (eventName, handler) {
    switch (eventName) {
      case "select":
        return wdtEmojiBundle.dispatchHandlers.select.push(handler);
        break;
      case "afterSelect":
        return wdtEmojiBundle.dispatchHandlers.afterSelect.push(handler);
        break;
      case "afterPickerOpen":
        return wdtEmojiBundle.dispatchHandlers.afterPickerOpen.push(handler);
        break;
      default:
        console.error('wdt-emoji-bundle - Not supported event type!', eventName);
        break;
    }
  };

  /**
   * On the fly emoji type changer apple, google, twitter, emojione
   * @param changeType
   */
  wdtEmojiBundle.changeType = function (changeType) {
    var nextSheet = wdtEmojiBundle.defaults.emojiSheets[changeType],
      currentEmojiList = document.querySelectorAll('.emoji-inner'),
      i;

    for (i = 0; i < currentEmojiList.length; i++) {
      var e = currentEmojiList[i];
      css(e, {
        'background-image': 'url(' + nextSheet + ')'
      });

    }

    wdtEmojiBundle.defaults.emojiType = changeType;
    document.querySelector('body').dataset.wdtEmojiBundle = changeType;
    this.emoji.img_set = changeType;
  };

  /**
   *
   * @param color
   */
  wdtEmojiBundle.changeSkinColor = function (color) {
    // @todo - [needim] - support skin colors for apple emoji set
  };

  /**
   *
   * @param text
   * @returns {string}
   */
  wdtEmojiBundle.render = function (text) {
    return this.emoji.replace_colons(this.emoji.replace_emoticons(this.emoji.replace_unified(this.replace_custom_emoji(text))));
  };

  /**
   * A trick for contenteditable range clear on blur
   * @param el
   */
  wdtEmojiBundle.addRangeStore = function (el) {
    el.addEventListener('focus', function () {
      wdtEmojiBundle.closePicker(el);
    });

    el.addEventListener('focus', function () {
      var s = window.getSelection();
      if (!wdtEmojiBundle.ranges[this.dataset.rangeIndex]) {
        wdtEmojiBundle.ranges[this.dataset.rangeIndex] = new Range();
      } else {
        s.removeAllRanges();
        s.addRange(wdtEmojiBundle.ranges[this.dataset.rangeIndex]);
      }
    });

    addListenerMulti(el, 'focus mouseup keypress input blur', function () {
      var s = window.getSelection();
      if (s.rangeCount > 0) {
        wdtEmojiBundle.ranges[this.dataset.rangeIndex] = s.getRangeAt(0);
      }
    });

    addListenerMulti(el, 'mousedown click', function (e) {
      if (document.activeElement != this) {
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }

        this.focus();
      }
    });
  };

  wdtEmojiBundle.replace_custom_emoji = function (text) {
    if (typeof text != "string") return text;

    var replacedText = text.replace(/:([^(:|\s)]*):/g, function(match) {
      var matches = match.split(':'), shortCode = matches.length == 3 ? matches[1] : null;
      if (shortCode && wdtEmojiBundle.defaults.customEmojiShortCodes.indexOf(shortCode) != -1) {
        return replaceCustomEmojiColon(wdtEmojiBundle.emoji.img_sets["custom_path"], shortCode);
      } else {
        return match;
      }
    });
    return replacedText;
  }

  /**
   *
   * @param el
   * @param events
   * @param cb
   */
  var addListenerMulti = function (el, events, cb) {
    events = events.split(' ');
    for (var i = 0; i < events.length; i++) {
      el.addEventListener(events[i], cb, false);
    }
  };


  /**
   *
   * @param group
   */
/*
   wdtEmojiBundle.setActiveTab = function (group) {
    var tabs = document.querySelectorAll('.wdt-emoji-tab');
    if (tabs.length) {
      for (var t = 0; t < tabs.length; t++) {
        removeClass(tabs[t], 'active');
      }
    }

    var activeTab = wdtEmojiBundle.popup.querySelector('.wdt-emoji-tab[data-group-name="' + group + '"]');
    addClass(activeTab, 'active');
  };
*/

  /**
   *
   * @param el
   * @param cls
   * @returns {*}
   */
  var findParent = function (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  };

  /**
   *
   * @param el
   * @param cls
   * @returns {*}
   */
  var findChild = function (el, cls) {
    var children = el.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.classList.contains(cls)) {
        return child;
      }
    }
  };

  /**
   *
   * @param el
   * @returns {*}
   */
  var getSelection = function (el) {
    var result = {};

    if (el.getAttribute('contenteditable')) {
      return {
        el: el,
        ce: true
      }
    }

    if (window.getSelection) {
      var val = el.value || el.innerHTML,
        len = val.length,
        start = el.selectionStart,
        end = el.selectionEnd,
        sel = val.substring(start, end);

      result = {
        "el"   : el,
        "start": start,
        "end"  : end,
        "len"  : len,
        "sel"  : sel
      };
    }
    else if (document.selection) { // ie
      var range = document.selection.createRange(),
        value = el.value || el.innerHTML,
        stored_range = range.duplicate();

      stored_range.moveToElementText(el);
      stored_range.setEndPoint('EndToEnd', range);
      el.selectionStart = stored_range.text.length - range.text.length;
      el.selectionEnd = el.selectionStart + range.text.length;

      result = {
        "el"   : el,
        "start": el.selectionStart,
        "end"  : el.selectionEnd,
        "len"  : value.length,
        "sel"  : range.text
      };
    }

    return result;
  };

  /**
   * Replace selection text for :input
   *
   * @param el
   * @param selection
   * @param emo
   */
  var insertText = function (el, selection, emo, emojiHtml) {
    var val = el.value || el.innerHTML || '';
    emo = emo + ' '; //append a space

    if (selection.ce) { // if contenteditable
      el.focus();
      document.execCommand('insertHTML', false, emojiHtml.outerHTML);
      document.execCommand('insertText', false, ' ');
    } else {
      var textBefore = val.substring(0, selection.start);
      textBefore = textBefore.replace(/:\S*$/, '')
      el.value = textBefore + emo + val.substring(selection.end, selection.len);

      // @todo - [needim] - check browser compatibilities
      el.selectionStart = el.selectionEnd = (textBefore.length + emo.length);
      el.focus();
    }
  };

  /**
   * Replace selection text for :input
   *
   * @param element
   * @param curNode
   * @param selection
   * @param emo
   */
  var replaceText = function (element, curRange, selection, emo, emojiHtml) {
    var val = curRange.startContainer.data || '';
    if (selection.ce && window.getSelection) { // if contenteditable
      element.focus();
      var sel = window.getSelection();
      var textBefore = val.substring(0, sel.anchorOffset),
          textBefore = textBefore.replace(/:\S*$/, '');
      var textAfter = val.substring(sel.focusOffset, val.length);

      curRange.startContainer.data = '';
      if (textAfter.length > 0) {
        curRange.insertNode(document.createTextNode(textAfter));
      }
      var whitespaceNode = document.createTextNode('\u00A0');
      curRange.insertNode(whitespaceNode);
      curRange.insertNode(emojiHtml);
      if (textBefore.length > 0) {
        curRange.insertNode(document.createTextNode(textBefore));
      };

      curRange.setStartAfter(whitespaceNode);
      curRange.setEndAfter(whitespaceNode);
      sel.removeAllRanges();
      sel.addRange(curRange);
    }
  };

  var replaceCustomEmojiColon = function (customPath, shortCode) {
    return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background-image: url(' + customPath + shortCode + '.png);background-size:100%;"></span></span>';
  };

  var genEmojiImageHtml = function (emoji, customEmojiShortCodes, shortCode) {
    // Get code: wdtEmojiBundle.emoji.map.colons['slightly_smiling_face'];
    // Get value : var VALUE =  wdtEmojiBundle.emoji.data["1f642"]
    // Get background-size:" wdtEmojiBundle.emoji.sheet_size + "00%"
    // Get background-position: background-position:" + m * g + "% " + m * b + "%"
    //      m = 100 / (wdtEmojiBundle.emoji.sheet_size - 1)
    //      g = VALUE[4]
    //      b = VALUE[5]
    var backgroundImage = "";
    var backgroundSize = "";
    var backgroundPosition = null;
    if (customEmojiShortCodes.indexOf(shortCode) != -1) {
      var customPath = emoji.img_sets["custom_path"],
      style = "background-image: url(" + customPath + shortCode + ".png);background-size:100%;";
      backgroundImage = "url(" + customPath + shortCode + ".png)";
      backgroundSize = "100%";
    }else {
      var emojiCode = emoji.map.colons[shortCode],
      emojiData = emoji.data[emojiCode],
      rate = 100 / (emoji.sheet_size - 1),
      backgroundSize = emoji.sheet_size + "00%",
      backgroundPosition = rate * emojiData[4] + "% " + rate * emojiData[5] + "%",
      backgroundImage = "url(" + emoji.img_sets[emoji.img_set].sheet + ")";

    }

    var imageHtml = document.createElement('img');
    addClass(imageHtml, 'emoji');
    imageHtml.alt = ":" + shortCode + ":";
    imageHtml.style.backgroundImage = backgroundImage;
    imageHtml.style.backgroundSize = backgroundSize;
    if (backgroundPosition) {
      imageHtml.style.backgroundPosition = backgroundPosition;
    }
    imageHtml.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    return imageHtml;
  };

  /**
   * Fire custom events
   *
   * @param eventName
   * @param params
   */
  var fire = function (eventName, params) {
    var handler, i, len, ref;
    ref = wdtEmojiBundle.dispatchHandlers[eventName];
    for (i = 0, len = ref.length; i < len; i++) {
      handler = ref[i];
      handler(params);
    }
  };

  /**
   *
   * @param eventType
   * @param elementQuerySelector
   * @param cb
   */
  var live = function (target, eventType, elementQuerySelector, cb) {
    function handleEvent (event) {
      if (target) {
        var qs = target.querySelectorAll(elementQuerySelector);
        var el = event.target, index = -1;
        while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
          el = el.parentElement;
        }

        if (index > -1) {
          cb.call(el, event);
        }
      }
    }
    document.addEventListener(eventType, handleEvent);
    if (window.emojiEvents == null) window.emojiEvents = [];
    if (target)
      window.emojiEvents.push({target: target, eventType: eventType, handleEvent: handleEvent});
  };

  /**
   * Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */
  var css = (function () {
    var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
      cssProps = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
        capName = name.charAt(0).toUpperCase() + name.slice(1),
        vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function (element, properties) {
      var args = arguments,
        prop,
        value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   *
   * @param element
   * @param name
   * @returns {boolean}
   */
  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   *
   * @param element
   * @param name
   */
  function addClass(element, name) {
    var oldList = classList(element),
      newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   *
   * @param query
   * @param name
   */
  function addClassAll(query, name) {

    var elements = document.querySelectorAll(query);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      var oldList = classList(element),
        newList = oldList + name;

      if (hasClass(oldList, name)) return;

      // Trim the opening space.
      element.className = newList.substring(1);
    }
  }

  /**
   *
   * @param element
   * @param name
   */
  function removeClass(element, name) {
    var oldList = classList(element),
      newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   *
   * @param query
   * @param name
   */
  function removeClassAll(query, name) {

    var elements = document.querySelectorAll(query);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      var oldList = classList(element),
        newList;

      if (!hasClass(element, name)) return;

      // Replace the class name.
      newList = oldList.replace(' ' + name + ' ', ' ');

      // Trim the opening and closing spaces.
      element.className = newList.substring(1, newList.length - 1);
    }
  }

  function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
      if(haystack[i] == needle) return true;
    }
    return false;
  }

  /**
   *
   * @param element
   * @returns {string}
   */
  function classList(element) {
    return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  return wdtEmojiBundle;
});
