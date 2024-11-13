class Person { // <1>
    perNik: string; // <2>
    protected perNama: string;
    perAlamat: string;
    
    constructor(nik: string, nama: string) { // <3>
        this.perNik = nik;
        this.perNama = nama;
    }
}

class Pegawai extends Person { // <4>
    pegNpp: string; // <5>
    private _pegJmlTanggungan: number;
    readonly dept: string;
    gaji: number;
    static potongPajak = 10; // <6>

    constructor(nik: string, npp: string, // <7>
                nama: string, dept: string) {
        super(nik, nama);
        this.pegNpp = npp;
        this.dept = dept;
    }

    getGaji(): number { // <8>
        return this.gaji;
    }

    setGaji(gajiBaru: number): void { // <9>
        this.gaji = gajiBaru;
    }

    getPotonganPajak(): number { // <10>
        return this.gaji * (Pegawai.potongPajak / 100);
    }

    presensi(): void { // <11>
        let dateTime = new Date();
        console.log("Presensi pada " +
                    dateTime.toLocaleTimeString() +
                    " - " + dateTime.toDateString());
    }
}

let pakBambang = new Pegawai("nik1122", "npp123", // <12>
                             "Bambang Purnomosidi", "IT");

pakBambang.setGaji(15750500); // <13>
console.log(pakBambang.getGaji());
pakBambang.presensi();
console.log(pakBambang.getPotonganPajak());

// Error karena properti '_pegJmlTanggungan' bersifat private:
// console.log(pakBambang._pegJmlTanggungan);