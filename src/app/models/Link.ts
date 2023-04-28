export class Link{
    private _id: number;
    private _title: string;
    private _url: string;

    constructor(_id:number,_title:string, _url:string){
        this._id = _id;
        this._title = _title;
        this._url = _url;
    }

    set id(_id:number){
        if(typeof(_id)=="number"){
            this._id = _id;
        }else{
            console.log("El dato no es númerico")
        }
    }

    set title(_title: string){
        this._title = _title;
    }

    set url(_url:string){
        this._url = _url;
    }

    get id():number{
        return this._id;
    }

    get title():string{
        return this._title;
    }

    get url():string{
        return this._url;
    }
}
