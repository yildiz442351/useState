import './Header.css'
import '../CustomButton/CustomButton';
import CustomButton from "../CustomButton/CustomButton";
import {useState } from "react";
import InfoBox from './../infoBox/infoBox';




/**Component Oluşturma Kuralları
 * Her React Componenti JavaScript Fonksiyonudur
 *Adı Büyük Harfle Başlayan Bir JavaScript Fonksiyonu Oluştur
 * Fonksiyonun içerisinde ekranda olmasını istediğin bir jsx kodlarını return içerisinde yaz
 * son olarak oluşturduğun componenti export et
 */

const Header = ({ aktifKullaniciSayisi,aktifKullanici }) => {
  console.log(aktifKullaniciSayisi)
  /**Componentlerin anlık durumlarını tutmak için 
   * useState Hooksu kullanılır
   * useState kullanırken
   * ilk tanımladığımız diğer statenin yani durumun değer güncelleyecek metoddur
   * ikinci tanımladığımız ve set ile başlayan değer ise durumun değergüncelleyecektir
   */

  const [basilanButon, setBasilanButon] = useState(null);
  const [modalGoster,setModalGoster]=useState(false)


  console.log(basilanButon)

  const menuIsimleri = ['Ana Sayfa', 'Hakkımızda', 'Ürünlerimiz', 'İletişim']

  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="navbar"/>
        
        {/*menuIsimleri dizisini dön ve her isim için ekrana bir a etiketi bas*/}
        {menuIsimleri.map((menuIsmi) => {
          return (
            <a>{menuIsmi}</a>
        
        )}}

        <div className="header-right">


          {/*basilanButonun içerigi var ise çıkış yap butonunu render et yoksa giriş yap butonlarını render et*/}

          {basilanButon ? (
            <CustomButton
              buttonTitle={`${basilanButon} olarak Çıkış Yap`}
              buttonColor={"red"}
              //basilanButon değerini tekrar null yap ki giriş yapılacak giriş butonları gözüksün
              onClick={() =>
                if(basilanButon==='Kullanıcı'){

                }
                {setAktifKullanici(aktifKullaniciSayisi-1)
                 setBasilanButon(null)}}}
            />
          ) : (
            <>
              <CustomButton
                onClick={() => {
                  setAktifKullanici(aktifKullaniciSayisi+1)
                  //basilanButon içeriği kullanıcı kelimesi ile değiştiriliyor
                  setBasilanButon("Kullanıcı");
                }}
                buttonTitle={"Kullanıcı Girişi"}
                buttonColor={"cadetblue"}
              />
              <CustomButton
                onClick={() => 
                  // basilanButon içeriği yönetici kelimesiyle değiştiriliyor
                  setBasilanButon("Yönetici")
                }
                buttonTitle={"Yönetici Girişi"}
                buttonColor={"orange"}
              />
              <CustomButton onClick={()=>setModalGoster(true)} buttonTitle={'Kayıt Ol' buttonColor={'green'}}/>
            </>
          )}
  {/*&& işareti ile yapılan sorguda sadece varsa kontrol edilir aksi durumu sorgulanamaz */}
          
          {/*basilanButon içeriginde Yönetici varsa*/}
          {basilanButon === 'Yönetici' && (

            <InfoBox infoMetin={'Aktif Kullanıcı Sayısı'} infoDeğer={aktifKullaniciSayisi}
            />

          )}
          {basilanButon === "Kullanıcı" && (

<InfoBox infoMetin={"Sizinle birlikte Kullanıcı Sayısı"} infoDeğer={aktifKullaniciSayisi}
/>

)}
</div>

{modalGoster===true && <Moldal setModalGoster={setModalGoster}/>}
    </header>
  );
};

export { Header };
