jQuery.Carousel = function (config) {
    this.setting = {
        root: null,                         //整个微缩图区域
        speed: 400,                          //移动速度
        auto: true,                         //是否开启自动轮播
        isButtonsOut: false                 //当鼠标移到到图片及button上方时，清除定时器轮播
    };

    $.extend(this.setting, config);

    this.root = $(this.setting.root);
    this.items = null;                        //全部微缩图li的集合
    this.itemWidth = 0;
    this.itemsPerPage = 0;                    //可视区域内最大显示图片数量
    this.curPage = 1;
    this.lastPage = 1;
    this.maxPages = 0;                        //最大显示页数，即，当前图片在1页内这1组图片时，ul整体不动，超出后，轮到下1页
    this.timer = null;                        //定时播放器对象变量

    this.init();

    return this;
};

jQuery.Carousel.prototype = {
    //初始化，计算设置相关参数
    init: function () {
        var Carousel = this;
        var _w = Carousel.root.width();
        var setting = Carousel.setting;

        this.albumCarouselZone = $('div.album-carousel-zone');
        this.albumCarousellist = $('ul.album-carousel-list');
        this.zoomoutAlbumTabs = $('p.zoomout-album-tabs');

        Carousel.albumCarousellist.append(Carousel.albumCarousellist.find('li:first').clone()); //clone
        Carousel.albumCarousellist.prepend(Carousel.albumCarousellist.find('li:last').clone()); //clone

        Carousel.items = Carousel.albumCarousellist.find('li');
        Carousel.items.width(_w);
        Carousel.itemWidth = _w;

        Carousel.itemsPerPage = Carousel.albumCarouselZone.width() / Carousel.itemWidth;
        Carousel.maxPages = Carousel.items.length < Carousel.itemsPerPage ? 1 : Carousel.items.length;
        Carousel.albumCarousellist.css('width', Carousel.itemWidth * Carousel.items.length);
        Carousel.albumCarousellist.css({
            'left': -Carousel.itemsPerPage * Carousel.itemWidth
        });
        Carousel.zoomoutAlbumTabs.find('span:first').addClass('current');
        Carousel.items.eq(1).addClass('current');

        Carousel.bind();

        if (setting.auto) {
            Carousel.timer = setTimeout(function () {
                Carousel.auto.call(Carousel);
            }, 4000);
        }

        return this;
    },
    //绑定dom相关事件方法
    bind: function () {
        var Carousel = this;

        Carousel.zoomoutAlbumTabs.find('span').on('click', function () {
            Carousel.lastPage = Carousel.curPage;
            Carousel.curPage = $(this).index() + 1;
            Carousel.move();
        });

        $(window).resize(function (e) {
            var _w = Carousel.root.width();

            Carousel.items.width(_w);
            Carousel.itemWidth = _w;
            Carousel.albumCarousellist.css('width', _w * Carousel.items.length);
            Carousel.albumCarousellist.css({
                'left': -(Carousel.itemsPerPage * Carousel.itemWidth) * Carousel.curPage
            });
        });

        return this;
    },
    //核心方法：移动图片组
    move: function (direction) {
        var Carousel = this,
            setting = Carousel.setting,
            clearTimer = function (evt) {
                if (Carousel.timer) {
                    clearTimeout(Carousel.timer);
                    Carousel.timer = null;
                }
            },
            setTimer = function (evt) {
                Carousel.timer = setTimeout(function () {
                    Carousel.auto.call(Carousel);
                }, 4000);
            };

        clearTimer();


        if (Carousel.curPage > Carousel.maxPages - 1) {
            Carousel.curPage = Carousel.maxPages - 1;
        }
        if (Carousel.curPage < 1) {
            Carousel.curPage = 1;
        }

        scrollValue = (Carousel.itemsPerPage * Carousel.itemWidth) * Carousel.curPage;

        Carousel.albumCarousellist.stop().animate({
            'left': '-' + scrollValue + 'px'
        }, setting.speed, function () {
            if (Carousel.curPage == Carousel.maxPages - 1) {
                Carousel.albumCarousellist.css({
                    'left': -Carousel.itemsPerPage * Carousel.itemWidth
                });

                Carousel.curPage = 1;
            }

            if (Carousel.curPage == 1 && direction === 'right') {
                Carousel.albumCarousellist.css({
                    'left': -(Carousel.maxPages - 1) * Carousel.itemWidth
                });

                Carousel.curPage = Carousel.maxPages - 1;
            }

            setTimer();

            Carousel.items.removeClass('current').eq(Carousel.curPage).addClass('current');
        });

        Carousel.zoomoutAlbumTabs.find('span').removeClass('current').eq(Carousel.curPage === Carousel.maxPages - 1 ? 0 : Carousel.curPage - 1).addClass('current');

        return this;
    },
    //自动轮播
    auto: function () {
        var Carousel = this;

        //清除之前已存在timer
        if (Carousel.timer) {
            clearTimeout(Carousel.timer);
            Carousel.timer = null;
        }

        if (Carousel.maxPages < 2) {
            return false;
        }

        Carousel.lastPage = Carousel.curPage;
        Carousel.curPage += 1;

        Carousel.move();

        //再次调用
        Carousel.timer = setTimeout(function () {
            Carousel.auto.call(Carousel);
        }, 4000);

        return this;
    }
};