import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import Typography from '@mui/material/Typography';

const PostingList = (props) => {
  const {id, title, content, filename, filepath} = props.post;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {title}
          {/* <Link to={'/post/'+id} /> */}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {content}
        </Typography>
      </CardContent>
    </Card>
        
  );

}

export default PostingList;