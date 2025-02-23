// JavaScript untuk menambahkan interaktivitas
document.addEventListener("DOMContentLoaded", () => {
    // Menambahkan event listener pada semua tombol "Pesan"
    const pesanButtons = document.querySelectorAll(".wa-button");
    pesanButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Mencegah aksi default link
            const waLink = button.getAttribute("href");
            const confirmMessage = "Apakah Anda ingin menghubungi via WhatsApp?";
            if (confirm(confirmMessage)) {
                window.open(waLink, "_blank"); // Membuka link di tab baru
            }
        });
    });

    // Pop-up di bagian kontak
    const contactLink = document.querySelector("#contact a");
    contactLink.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Anda akan diarahkan ke WhatsApp untuk menghubungi kami!");
        window.open(contactLink.href, "_blank");
    });
});
