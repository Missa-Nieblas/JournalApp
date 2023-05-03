import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>

       {/*  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti quae, sit optio corrupti tenetur earum est possimus explicabo reprehenderit. Amet maxime omnis eum mollitia illum animi temporibus esse sed.</Typography> */}
        {/* <NothingSelectedView/> */}
        <NoteView/>
    </JournalLayout>
  )
}
