export
class Unit{
    id:number;
    name:string;
    description:string;
    created_at:string;
    updated_at:string;
    Users_id:number;

    constructor($name = "", $description=""){
        this.name = $name;
        this.description = $description;
    }
}