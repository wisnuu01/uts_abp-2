let hari: number = 5;
let hariStr: string;

switch (hari) {
    case 0:
        hariStr = "Minggu";
        break;
    case 1:
        hariStr = "Senin";
        break;
    case 2:
        hariStr = "Selasa";
        break;
    case 3:
        hariStr = "Rabu";
        break;
    case 4:
        hariStr = "Kamis";
        break;
    case 5:
        hariStr = "Jum'at";
        break;
    case 6:
        hariStr = "Sabtu";
        break;
    default:
        hariStr = "Tidak ada hari tersebut";
        break;
}

console.log(hariStr);
