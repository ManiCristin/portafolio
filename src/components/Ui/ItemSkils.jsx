export const ItemSkils = ({styleItem="skill-item",styleName="skill-name",styleBar="skill-bar",porsent="30%",Text}) =>{
    return (

     
        <div className={styleItem}>
          <span className={styleName}>{Text}</span>
          <div className={styleBar} style={{"--percent":porsent}}></div>
        </div>
        
    )
}