
export interface IUser {

id?: number;
username?: string;
password?: string;
job?: string;
role?: UserRole;
departement?: Departement;
email?: string;

}

export class User implements IUser {
constructor(public id?: number, public username?: string, public password?: string,public email?: string, public job?: string, public role?: UserRole, public departement?: Departement  ){

}


}
export enum UserRole {
    COLLABORATEUR = 'Collaborateur',
    ADMIN = 'Admin',
    RESPONSABLEPOLE='ResponsablePole',
    TEAMLEAD='TeamLead'
  
  } 
  export enum Departement {
    DIGIX= 'DIGIX',
    BEST='BEST',
    CAO='CAO',
    ADMINISTRATION='ADMINISTRATION',
    FINLAB='FINLAB',
    FSI='FSI',
    MARKETING_SALES='MARKETING_SALES',
    PMO='PMO',
    PROXYMFRANCE='PROXYMFRANCE',
    PROXYM_U='PROXYM_U',
    QA='QA',
    RH='RH',
    SI_Integration='SI_Integration',
    SUPPORT_CLIENT='SUPPORT_CLIENT',
    TGO='TGO',
    VALOMNIA='VALOMNIA'
}

