abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void // only type declaration

    // adding default features
    getFilter(): number {
        // complex calculations
        return 1
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public timer: number
    ) {
        super(cameraMode,filter)
    }

    // defination of getSepia()
    getSepia(): void {
        console.log("Sepiaaaaahhhhh!")
    }

}

const instagram = new Instagram("Normal", "Autumn", 10)

instagram.getFilter() // we can directly access that from the abstract class