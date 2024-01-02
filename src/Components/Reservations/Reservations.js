import ReservationCard from "../ReservationCard/ReservationCard";
import "./Reservations.css";

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return (
      <ReservationCard
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    );
  });

  return (
    <div class="container-wrapper">
        <div className="reservation-container">
        {reservationCards}
        </div>
    </div>
  )
};

export default Reservations;
