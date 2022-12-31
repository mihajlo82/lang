import thumbUp from '../../utils/pictures/thumbUp.PNG';
import thumbDown from '../../utils/pictures/thumbDown.PNG';
import { COUNTERS_DEFAULT_TYPES } from '../../types/default_types';
import { THUMB_DOWN, THUMB_UP } from '../../constants/alts';

const Counters = ({ mainStyle, counterSuccess, totalQuestions }) => {
    return (
        <div className={mainStyle.likesWrapp}>
            <div className={mainStyle.likesWrappInner}>
                <div className={mainStyle.counters}>
                    <img className={mainStyle.thumbs} src={thumbUp} alt={THUMB_UP} />
                    <span className={mainStyle.counterNo}>{counterSuccess} / {totalQuestions}</span>
                </div>

                <div className={mainStyle.counters}>
                    <img className={mainStyle.thumbs} src={thumbDown} alt={THUMB_DOWN} />
                    <span className={mainStyle.counterNo}> {totalQuestions - counterSuccess} / {totalQuestions}</span>
                </div>
            </div>
        </div>
    )
}

export default Counters;

Counters.defaultProps = COUNTERS_DEFAULT_TYPES;