function FavoritesLoading():JSX.Element {
  return (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (loading)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Loading content...</b>
        <p className="favorites__status-description">We are loading your saved properties.</p>
      </div>
    </section>
  );
}

export default FavoritesLoading;
