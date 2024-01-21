import Frame from "../components/Frame";
import { getCar } from "@/actions/car";
import Modal from "../components/modal";

export default async function page({ params }: { params: { id: string } }) {
  const car = await getCar(params.id);

  return (
    <Modal>
      <Frame photo={car.image} />
    </Modal>
  );
}
