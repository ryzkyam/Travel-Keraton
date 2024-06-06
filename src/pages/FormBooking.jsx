

// export default FormBooking;

import React, { useState } from 'react';
 // Assuming you have a CSS file named FormBooking.css

const FormBooking = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [noHp, setNoHp] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [lokasiPenjemputan, setLokasiPenjemputan] = useState('');
  const [waktuPenjemputan, setWaktuPenjemputan] = useState('');
  const [catatanTambahan, setCatatanTambahan] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validasi form
    if (!nama || !email || !noHp || !tanggalMulai || !lokasiPenjemputan || !waktuPenjemputan) {
      alert('Semua field wajib diisi!');
      return;
    }

    // Hitung total harga
    const totalHarga = 700000 * 3;

    // Kirim data form
    console.log({
      nama,
      email,
      instagram,
      noHp,
      tanggalMulai,
      lokasiPenjemputan,
      waktuPenjemputan,
      catatanTambahan,
      totalHarga,
    });

    // Reset form
    setNama('');
    setEmail('');
    setInstagram('');
    setNoHp('');
    setTanggalMulai('');
    setLokasiPenjemputan('');
    setWaktuPenjemputan('');
    setCatatanTambahan('');
  };

  return (
    <div className="container bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto max-w-2xl p-6 rounded-lg shadow-lg">
    <h2 className="text-4xl font-extrabold text-center text-white">Form Booking Tour</h2>
  
    <form className="mt-8 space-y-6" onSubmit={handleSubmit} action='/order' method='POST'>
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="nama">Nama Lengkap:</label>
        <input type="text" id="nama" value={nama} onChange={(event) => setNama(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" required />
      </div>
  
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" required />
      </div>
  
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="instagram">Instagram (opsional):</label>
        <input type="text" id="instagram" value={instagram} onChange={(event) => setInstagram(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" />
      </div>
  
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="noHp">No. HP/Whatsapp:</label>
        <input type="number" id="noHp" value={noHp} onChange={(event) => setNoHp(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" required />
      </div>
  
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="tanggalMulai">Tanggal Mulai Tour:</label>
        <input type="date" id="tanggalMulai" value={tanggalMulai} onChange={(event) => setTanggalMulai(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" required />
      </div>
  
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="lokasiPenjemputan">Lokasi Penjemputan:</label>
        <input type="text" id="lokasiPenjemputan" value={lokasiPenjemputan} onChange={(event) => setLokasiPenjemputan(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" required />
      </div>
  
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="waktuPenjemputan">Waktu Penjemputan:</label>
        <input type="time" id="waktuPenjemputan" value={waktuPenjemputan} onChange={(event) => setWaktuPenjemputan(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" required />
      </div>
  
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="catatanTambahan">Catatan Tambahan (opsional):</label>
        <textarea id="catatanTambahan" value={catatanTambahan} onChange={(event) => setCatatanTambahan(event.target.value)} className="shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent block w-full sm:max-w-xs rounded-lg px-4 py-2 bg-white" />
      </div>
  
      <div className="mb-4 text-white">
        <p className="text-lg font-extrabold">Harga (per Orang): Rp 728.000</p>
        <p className="text-lg font-extrabold">Total Harga: </p>
      </div>
  
      <button type="submit" className="w-full sm:w-auto bg-black hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Pesan Sekarang</button>
    </form>
  </div>
  
  );
};

export default FormBooking;
