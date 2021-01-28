import styles from "components/CharacterInfo/style.module.css";

export const CharacterInfo = () => {
  return (
    <section>
      <div>
        <img src="https://rickandmortyapi.com/api/episode/1" alt="img" />
        <p>Name</p>
      </div>
      <div>
        <p>
          <span>Exist:</span>Alive
        </p>
        <p>
          <span>Gender:</span>Male
        </p>
        <p>
          <span>Rase:</span>Human
        </p>
        <p>
          <span>Last known location:</span>Minsk
        </p>
        <p>
          <span>First seen in:</span>Gorodeya
        </p>
        <p>
          <span>Episodes:</span>
          <ul>
            <li>
              <img src="url" alt="img" />
              <p>Episode's name</p>
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};
