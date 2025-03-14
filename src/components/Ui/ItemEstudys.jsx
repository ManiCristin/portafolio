export const ItemEstudys = ({titulo,parafo,Textbutton,StyleButton="Bt-Default"})=>
    {
        return(
            <>
            <div className="Estudys-Items">
            <h3>{titulo}</h3>
            <p>{parafo}</p>
            <button className={StyleButton}>{Textbutton}</button>
            </div>
            </>
        )
    }