import React from "react";
import Navigation from "./Navigation";
import JotiPict from "../img/joti-potrait.webp";
import Signature from "../img/signature.webp";
import AudioControl from "./AudioControl";

const Message = () => {
  return (
    <>
      <Navigation />
      <div id="message">
        <div className="container">
          <div className="img-container">
            <img src={JotiPict} alt="joti-potrait.webp" />
          </div>
          <p>
            Happy Birthday Taqiyya Pikajoti Putri Yudhianto Putri Filika dan Andika!!! Akhirnya nyusul juga udh kepala 2 njedul dikit alias 21 iww udh tante-tante, gk kerasa yahh keknya baru kemaren kita tu lulus SMA gt, kmu udh semester 3
            aja skrg, aku udh semester 5. Jadi dewasa tu menyenangkan tapi susah dijalanin kalo kata iklan apa itu aku lupa, dan bener juga wkwk, emg yah kadang ngerasa capek gt jadi dewasa (apa aku doang?) tapi perjalanan kita masih
            panjaaaaaaang, masih banyak kesempatan - kesempatan yang bisa kita coba, kok mah curhat aku ya semoga curhatanku bs bermanfaat wkwk. Secapek - capeknya tetep inget aja l-Baqarah Ayat 286: Allah Tidak Akan Menguji Hamba-Nya di
            Luar Batas Kemampuannya.
          </p>
          <p>
            Pokoknya semoga di tahunmu ini bisa dapet banyak kesempatan yang bikin berkembang dan yang jelas bermanfaat dan mungkin tidak diduga - duga, bisa dapet circle yang awet dan suportif (ini enak bgt klo udh dapet, semoga kmu bisa
            dapet segera aamiin) dan buat seterusnya semoga terus berkembang menjadi lebih baikk, semoga semua harapan sama cita-cita bisa tercapai, dimudahkan semua urusan, sehat selalu, dilancarkan rezekinya, diberkahi Allah SWT selalu
            aamiin aamiin aamiin
          </p>
          <p>Sama satu lagi, semoga suka ama kado2 nya:*</p>
          <div className="signature-wrapper">
            <p>10 Desember 2021</p>
            <img src={Signature} alt="" />
            <p>Antares</p>
          </div>
        </div>
        <AudioControl />
      </div>
    </>
  );
};

export default Message;
