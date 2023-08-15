import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { FiTrash2 } from "react-icons/fi";
import { useRemoveAlbumMutation } from "../store";
function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleRemoveAlbum =()=>{
      removeAlbum(album);
  }
  const header = (
    <>
      <Button className='mr-2' onClick={handleRemoveAlbum} loading={results.isLoading}>
        <FiTrash2 />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
