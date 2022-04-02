import Gallery from './gallery/gallery';
import Rating from './rating/rating';
import BookmarkBtn from './bookmark-btn/bookmark-btn';
import PremiumMark from './premium-mark/premium-mark';
import Features from './features/features';
import Price from './price/price';
import Inside from './inside/inside';
import Host from './host/host';
import ReviewsSection from '../reviews/reviews';
import Map from '../map/map';
import { Hotel, Hotels } from 'types/hotel';
import { Comments } from 'types/comment';

function Property({hotel, nearbyHotels, reviews}:Props):JSX.Element {
  const {
    city,
    host,
    type,
    price,
    goods,
    title,
    images,
    rating,
    bedrooms,
    maxAdults,
    isPremium,
    description,
    isFavorite,
  } = hotel;

  return (
    <section className="property">
      <Gallery images={images}/>
      <div className="property__container container">
        <div className="property__wrapper">
          <PremiumMark isActive={isPremium} />

          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <BookmarkBtn isActive={isFavorite}/>
          </div>
          <Rating value={rating}/>
          <Features
            maxAdults={maxAdults}
            bedrooms={bedrooms}
            type={type}
          />
          <Price value={price}/>
          <Inside goods={goods}/>
          <Host host={host}>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </Host>
          <ReviewsSection className='property__reviews' reviews={reviews}/>
        </div>
      </div>
      <Map className="property__map"
        selectedHotel={hotel}
        hotels={nearbyHotels}
        city={city}
      />
    </section>
  );
}

type Props = {
  hotel: Hotel
  nearbyHotels: Hotels;
  reviews: Comments
}

export default Property;
