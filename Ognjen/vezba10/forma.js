function provera()
{
    var uzorak_korime = document.MojaForma.user.value;
    var uzorak_pass = document.MojaForma.pass.value;
    var uzorak_email = document.MojaForma.email.value;
    var uzorak_mobilni = document.MojaForma.mobile.value;
    var uzorak_pol = document.MojaForma.gender.value;
    var uzorak_uslovi = document.MojaForma.condition.value;

    if(uzorak_korime==="" || uzorak_korime===null)
    {
        alert("Niste uneli korisnicko ime");
        return false;
    }
    else if(uzorak_pass==="" || uzorak_pass===null)
    {
        alert("Niste uneli password");
        return false;
    }
    else if(uzorak_email==="" || uzorak_email===null)
    {
        alert("Niste uneli email");
        return false;
    }
    else if(uzorak_mobilni==="" || uzorak_mobilni===null)
    {
        alert("Niste uneli broj telefona");
        return false;
    }
    else if(uzorak_pol==="" || uzorak_pol===null)
    {
        alert("Niste odabrali pol");
        return false;
    }
    else if(uzorak_uslovi==="" || uzorak_uslovi===null)
    {
        alert("Niste saglasni sa uslovima");
        return false;
    }
    else
    {
        alert("Uspesno ste poslali formu");
        return true;  
    }
}