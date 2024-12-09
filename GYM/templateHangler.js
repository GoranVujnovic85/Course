var TEMPLATE = new templateClass()
function templateClass() {
    this.init = () => {
        debugger
        document.getElementsByTagName('footer')[0].innerHTML = this.render('common', 'footer', [])
    }
    this.templates = {
        common: {
            footer: `<!-- Section: Links  -->
                <section class="container">
                    <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>MEGA GYM FITNES CENTAR
                        </h6>
                        <p data-translate="Description"
                            data-en="Take the first step towards a healthier and stronger version of yourself with our unbeatable offers. Together, we will work hard, achieve our goals, and succeed!"
                            data-rs="Napravi prvi korak ka zdravijoj i jačoj verziji sebe uz naše nenadmašne ponude.
                        Zajedno ćemo se truditi, postići ciljeve i pobediti!">
                            Napravi prvi korak ka zdravijoj i jačoj verziji sebe uz naše nenadmašne ponude.
                            Zajedno ćemo se truditi, postići ciljeve i pobediti!
                        </p>
                        </div>

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Company" data-en="Company" data-rs="Kompanija">
                            Kompanija
                        </h6>
                        <p>
                            <a href="index.html" class="text-reset" data-translate="Start Page" data-en="Start Page"
                            data-rs="Početna">Početna</a>
                        </p>
                        <p>
                            <a href="about.html" class="text-reset" data-translate="About us" data-en="About us" data-rs="O nama">O
                            nama</a>
                        </p>
                        <p>
                            <a href="news.html" class="text-reset" data-translate="News" data-en="News" data-rs="Vesti">Vesti</a>
                        </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Useful links" data-en="Useful links"
                            data-rs="Korisni linkovi">
                            Korisni linkovi
                        </h6>
                        <p>
                            <a href="https://www.pansport.rs/tekstoteka/zdravlje/saveti-za-pocetnike-u-teretani" class="text-reset"
                            data-translate="Useful advices" data-en="Useful advices" data-rs="Korisni saveti">Korisni saveti</a>
                        </p>
                        <p>
                            <a href="https://supplementstore.rs/" class="text-reset" data-translate="Suplements"
                            data-en="Suplements" data-rs="Suplementi">Suplementi</a>
                        </p>
                        <p>
                            <a href="https://rzsport.gov.rs/usluge/sportsko-medicinski-pregledi/" class="text-reset"
                            data-translate="Sports medical" data-en="Sports Medical Check-ups"
                            data-rs="Sportski pregledi">Sportski pregledi</a>
                        </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Contact" data-en="Contact" data-rs="Kontakt">
                            Kontakt</h6>
                        <p><i class="fas fa-home me-3"></i> Temerinska 95, Novi Sad Serbia</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            megagymNS@gmail.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i>+381 21 555 333</p>
                        </div>
                        <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                    </div>
                </section>
                <!-- Copyright -->
                <p class="text-center text-body-secondary" data-translate="Copyright"
                    data-en="Copyright © 2024 Golden boys. All rights reserved."
                    data-rs="Copyright © 2024 Golden boys. Sva prava zadržana.">Copyright © 2024 Golden boys. All rights reserved.
                </p>
        `
        },
        index: {},
        contact: {},
        locker: {
            datarow: `
                <p class="**&&^^%%CLASS**&&^^%%"><strong>**&&^^%%asglkjhgjgsjghalghsakjg**&&^^%%:</strong> **&&^^%%tagId**&&^^%%</p>
                <p class="**&&^^%%CLASS**&&^^%%"><strong>**&&^^%%TEST2**&&^^%%:</strong> **&&^^%%tagName**&&^^%%</p>
            `
        }
    }

    this.render = (templateRegion, templateName, translate) => {
        console.log(translate)
        let dataReturn = this.templates[templateRegion][templateName]
        translate.forEach((translateObject) => {

            dataReturn = dataReturn.replace('**&&^^%%' + translateObject.key + '**&&^^%%', translateObject.value)

        })
        return dataReturn

    }
}


// Set the language on page load
document.addEventListener('DOMContentLoaded', () => {
    TEMPLATE.init(); // Initialize the language when the page is loaded
  });