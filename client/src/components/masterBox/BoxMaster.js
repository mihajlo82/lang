import { BOX_MASTER_DEFAULT_TYPE } from "../../types/default_types"

const BoxMaster = ({ mainStyle, itemData, setText, setShowCounter, inputRef }) => {
  return (
    <>
      <div className={mainStyle.masterBoxImageWrapp}>
        <img className={mainStyle.masterBoxImage} src={itemData?.picture} alt={itemData?.english} />
      </div>

      <div className={mainStyle.masterWordWrapp} >
        <p className={mainStyle.masterWord}>{itemData?.serbian}</p>
      </div>

      <div className={mainStyle.inputWrapp} >
        <input type='text' className={mainStyle.input} onChange={(e) => setText(e.target.value)} ref={inputRef} />
      </div>

      <div className={mainStyle.letSeeWrapp} >
        <button className={mainStyle.letSeeBtn} onClick={() => setShowCounter(prev => !prev)} type='button'>Let's see</button>
      </div>
    </>
  )
}

export default BoxMaster

BoxMaster.defaultProps = BOX_MASTER_DEFAULT_TYPE;