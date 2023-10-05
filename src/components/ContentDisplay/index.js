import './index.css'

const carsList = [
  {
    id: 1,
    name: 'REC Theaters - 907 S Backford Dr, Henderson, NC 27536',
    imgUrl:
      'https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2991,h_1682,c_limit/GettyImages-946087016.jpg',
    people: '3 Room',
    type: '4 Bed',
    km: '1 Bath',
    engine: '732 st',
    dollars: '$7255',
  },
  {
    id: 2,
    name: 'Costco Wholesale - 1021 Oak Forest Ln, Mrytle Beach, Sc',
    imgUrl:
      'https://image.cnbcfm.com/api/v1/image/107250372-1685732667509-gettyimages-1384311964-_02a8535.jpeg?v=1686142801',
    people: '3 Room',
    type: '4 Bed',
    km: '1 Bath',
    engine: '732 st',
    dollars: '$7255',
  },
  {
    id: 3,
    name: 'Regal North Hills - 4150 main at North Hills St, Releigh',
    imgUrl:
      'https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2022/01/DEST_USA_NYC_EMPIRE_shutterstock_409606294-6.jpg',
    people: '3 Room',
    type: '4 Bed',
    km: '1 Bath',
    engine: '732 st',
    dollars: '$5256',
  },
  {
    id: 4,
    name: 'Spring Lane Cinemas - 1351 Plaza Blvd, SanFord, NC 2730',
    imgUrl:
      'https://globalnews.ca/wp-content/uploads/2023/05/GettyImages-1454213555.jpg?quality=85&strip=all&w=1200',
    people: '3 Room',
    type: '4 Bed',
    km: '1 Bath',
    engine: '732 st',
    dollars: '$7255',
  },
  {
    id: 5,
    name: 'REC Theaters - 907 S Backford Dr, Henderson, NC 27536',
    imgUrl:
      'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/categoryimages/14/73/14734_v10.jpeg',
    people: '3 Room',
    type: '4 Bed',
    km: '1 Bath',
    engine: '732 st',
    dollars: '$7255',
  },
  {
    id: 6,
    name: 'Dollar General - 5416 Rock Query Rd, Raliegh, NC 27610',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r6kdMZLbsoa_nqbNDj880IBGeUxRNqQ8Nw&usqp=CAU',
    people: '3 Room',
    type: '4 Bed',
    km: '1 Bath',
    engine: '732 st',
    dollars: '$7255',
  },
]

const ContentDisplay = () => (
  <>
    <div className="content-container">
      {carsList.map(each => (
        <li className="car-item" key={each.id}>
          <div className="car-container">
            <img src={each.imgUrl} alt={each.name} className="car-image" />
            <div className="car-name-container">
              <p className="name">{each.name}</p>
            </div>
            <div className="car-capacity-container">
              <p>{each.people}</p>
              <p>{each.type}</p>
              <p>{each.km}</p>
              <p>{each.engine}</p>
            </div>

            <hr />
            <div className="car-capacity-container">
              <div>
                <p className="dollar">
                  {each.dollars} <span className="month"> / month</span>
                </p>
              </div>

              <button type="button" className="rent-now">
                Read More
              </button>
            </div>
          </div>
        </li>
      ))}
    </div>
  </>
)

export default ContentDisplay
