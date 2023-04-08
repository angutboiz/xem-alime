$(document).ready(function () {
    var stt = 0
    var endImg = $(".sliders:last").attr("idx")

    var changeImg = function (stt) {
        $(".sliders").hide()
        $(".sliders").eq(stt).fadeIn()
        $(".hero-text").eq(stt).addClass("animate__animated animate__fadeInDown")

        $(".change-img button").removeClass("active")
        $(".change-img button").eq(stt).addClass("active")
        clearInterval(interval)
        timer()
    }

    $("button").click(function () {
        stt = $(this).attr("idx")

        changeImg(stt)
    })

    $("#next").click(function () {
        if (++stt > endImg) {
            stt = 0
        }

        changeImg(stt)
    })

    $("#prev").click(function () {
        if (--stt < 0) {
            stt = endImg
        }

        changeImg(stt)
    })

    $("#scrollToTopButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow")
        return false
    })

    $("#scrollToTrending,#scrollToTrendingM").click(function () {
        $("html, body").animate(
            {
                scrollTop: $("#trending").offset().top - ($(window).height() - $("#trending").outerHeight()) / 2,
            },
            "slow"
        )
        return false
    })

    $("#scrollToPopular,#scrollToPopularM").click(function () {
        $("html, body").animate(
            {
                scrollTop: $("#popular").offset().top - ($(window).height() - $("#popular").outerHeight()) / 2,
            },
            "slow"
        )
        return false
    })

    $("#scrollToRecently,#scrollToRecentlyM").click(function () {
        $("html, body").animate(
            {
                scrollTop: $("#recently").offset().top - ($(window).height() - $("#recently").outerHeight()) / 2,
            },
            "slow"
        )
        return false
    })

    $("#scrollToLiveAction,#scrollToLiveActionM").click(function () {
        $("html, body").animate(
            {
                scrollTop: $("#live-action").offset().top - ($(window).height() - $("#live-action").outerHeight()) / 2,
            },
            "slow"
        )
        return false
    })

    var interval
    var timer = function () {
        interval = setInterval(function () {
            $("#next").click()
        }, 3000)
    }

    timer()

    //modal
    function Modal() {
        var modal = $(".modal-login")
        var btn = $(".login")
        var span = $(".close")

        btn.click(function () {
            modal.addClass("animate__animated animate__fadeInDown").show()
        })

        span.click(function () {
            modal.hide()
        })

        $(window).on("click", function (e) {
            if ($(e.target).is(".modal-login")) {
                modal.hide()
            }
        })

        $(".product img").click(function () {
            modal.addClass("animate__animated animate__fadeInDown").show()
        })
    }
    Modal()

    $(".categories-mobile").click(function () {
        $(".dropdown-moblie-nav").toggle()
    })

    $(".mobile-menu-wrap").click(function () {
        $(".dropdown-mobile").toggle()
    })

    $(".product a").click(function () {
        $(".fzf-not-found").addClass("animate__animated animate__fadeInDown").show()
    })

    $(".fzf-not-found span").click(function () {
        $(".fzf-not-found").hide()
    })
})

$(window).on("load", function () {
    setTimeout(function () {
        $(".spinner").fadeOut()
        $("#preloader").delay(800).fadeOut("slow")
        $("body").delay(800).css({
            overflow: "visible",
        })
    }, 1000)
})
