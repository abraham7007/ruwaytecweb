<template>
    <section class="page-title-area" :style="{ backgroundImage: `url('/images/photos/bg-page-title3.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-content">
                        <h2 class="title text-white">{{ title }}</h2>
                        <div class="bread-crumbs"><img class="line-shape" src="/images/shape/line-s3.png" alt="shape">
                            <n-link to="/"> Home <span class="breadcrumb-sep">/</span></n-link>
                            <span class="active">{{ breadcrumbTitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-sidebar" data-aos="fade-right" data-aos-duration="1100">
            <div class="social-icon">
                <a href="https://m.facebook.com/profile.php?id=100063552639710"><i class="icofont-facebook"></i></a>
                <a href="https://www.linkedin.com/company/80447477"><i class="icofont-instagram"></i></a>
                <a href="https://www.linkedin.com/company/80447477"><i class="icofont-linkedin"></i></a>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-three" src="/images/shape/5.png" alt="shape">
            <img class="layer-shape-four" src="/images/shape/3.png" alt="shape">
        </div>
    </section>
</template>

<script>
    export default {
        props: ['title', 'breadcrumbTitle']
    };
</script>