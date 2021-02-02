// import styles from "components/CharacterInfo/style.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPersonInfo } from "store/actions";

export const CharacterInfo = () => {
  const id = useParams().idOfPerson;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonInfo(id));
  }, []);

  const personInfo = useSelector((store) => store.personInfo);

  return (
    <section>
      <div>
        <img src={personInfo.image} alt="img" />
        <p>{personInfo.name}</p>
      </div>
      <div>
        <p>
          <span>Exist:</span>{personInfo.status}
        </p>
        <p>
          <span>Gender:</span>{personInfo.gender}
        </p>
        <p>
          <span>Rase:</span>{personInfo.species}
        </p>
      </div>
    </section>
  );
};
