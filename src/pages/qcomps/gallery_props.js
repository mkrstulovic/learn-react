function Profile({ scientist, size=70 }) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + scientist.imageId + 's.jpg'}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>{`Awards: ${scientist.awards.length}`} </b>
          {`(${scientist.awards.join(', ')})`}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function GalleryQuiz() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist={{
          name: 'Maria Skłodowska-Curie',
          imageId: 'szV5sdG',
          profession: 'physicist and chemist',
          awards: ['Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'],
          discovered: 'polonium (element)'
        }}
      />
      <Profile
        scientist={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
          profession: 'geochemist',
          awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
          discovered: 'a method for measuring carbon dioxide in seawater'
        }}
      />
    </div>
  );
}
