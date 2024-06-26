import React from 'react';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
            </Typography>
        </CardContent>
       <CardActions>
            <Button size="small" onClick={assignNewQuoteIndex} id="new-quote">New Quote</Button>
            <IconButton
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}
                id="tweet-quote"
            >
                <FontAwesomeIcon icon={faTwitter} size="xs"></FontAwesomeIcon>
            </IconButton>
       </CardActions>
    </Card>
    
);

export default QuoteMachine;