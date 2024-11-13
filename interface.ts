interface IPerson { // <1>
    nik: string;
    nama: string;
    alamat: string;
    menikah: boolean;
}

interface IPegawai extends IPerson { // <2>
    readonly npp: string;
    jabatan: string;
    gaji: number;
    email?: string;
}

let peg01: IPegawai = { // <3>
    nik: "012345",
    nama: "Donal",
    alamat: "Jl. Awan Biru 21",
    menikah: true,
    npp: "98123",
    jabatan: "Manager SDM",
    gaji: 15000000
}

console.log(peg01.nama, peg01.jabatan); // <4>

// Error: Cannot assign to 'npp' because it is a read-only property
// peg01.npp = "981234";

interface IKamusList { // <5>
    [index: string]: string;
}

let strKamus: IKamusList = {}; // <6>
strKamus["university"] = "universitas";
strKamus["freedom"] = "merdeka";
console.log(strKamus["university"]);

interface IPemrosesNilai { // <7>
    (kunci: number, nilai: string): void;
}

function tambahNilai(kunci: number, nilai: string): void { // <8>
    console.log("Menambah", kunci, nilai);
}

function perbaruiNilai(kunci: number, nilaiBaru: string): void { // <9>
    console.log("Memperbarui", kunci, nilaiBaru);
}

let pemrosesTambah: IPemrosesNilai = tambahNilai; // <10>
pemrosesTambah(123, "Nilai 123");

let pemrosesPerbarui: IPemrosesNilai = perbaruiNilai;
pemrosesPerbarui(123, "Nilai baru 123");