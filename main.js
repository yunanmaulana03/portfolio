function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("Lihat Sertifikat").removeClass("active")
    } else {
        $(target).html("Sembunyikan Sertifikat").addClass("active")
    }
    
    const item = $(target).parents(".tentang-exp-item")
    const detail = $(item).children(".tentang-exp-item-detail")

    $(detail).slideToggle()
}