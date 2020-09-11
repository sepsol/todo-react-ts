import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: '#f5f5f5'
    },
    grow: {
      flexGrow: 1
    },
    newTodoForm: {
      width: '100%',
      maxWidth: 720,
      margin: '5px auto 20px',
      display: 'flex',
      alignItems: 'flex-end'
    },
    textField: {},
    addIcon: {
      marginLeft: 10
    }
  })
);

function BottomAppBar() {
  const classes = useStyles();
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({
      type: 'CREATE_TODO',
      payload: { title, isDone: false }
    });
    setTitle('');
  }

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <form className={classes.newTodoForm} onSubmit={handleSubmit}>
          <TextField
            id="standard-full-width"
            className={classes.textField}
            placeholder="Add a new todo..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <IconButton
            color="primary"
            size="small"
            className={classes.addIcon}
            onClick={handleSubmit}
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </form>
      </Toolbar>
    </AppBar>
  );
}

export default BottomAppBar;
