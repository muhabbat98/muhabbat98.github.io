import {  gql  } from "@apollo/client";

export const USER = gql`
    query($userId: Int) {
        user(userId: $userId){
            username,
            fullName
        }
    }
  
`
export const COUNT= gql`
    query{
        countResources{
            name
            count
        }
    }
  
`
export const EXACT_JOURNAL = gql`
    query ExactJournal($id:Int){
        exactJournals(id: $id) {
            id
            file {
            filename
            }
            serialNumber
            year    
            date
        }
    }

`
export const JOURNAL_NAME = gql`
    {
        journals{
            id
            name
            cover{
                coverId
                filename
                mimetype
            }
            resourceType
        }
    }
`

export const JOURNALS = gql`
   query{
    journals{
        id
        cover{
            coverId
            filename
        }
        name
        resourceType
        language  
    }
    }

`
export const SCIENCE_BOOKS = gql`
    query($id:Int) {
        sciences (degree:$id){
            id
            cover {
                coverId
                filename
                mimetype
            }
            file {
                filename
                fileId
                mimetype
            }
            name
            author
            keywords
            description
            resourceType
            degree
            language
            date
        }
    }

`
export const FORIEGN_BOOKS = gql`
    query {
        foriegnBooks {
            id
            name
            author
            keywords
            description
            resourceType
            language
            date
            resourseHolder
            file {
                fileId
                filename
                mimetype
                size
            }
            cover {
                coverId
                filename
                mimetype
                size
            }
        }
    }

`
export const DEPARTMENT = gql`
query Departments {
  departments {
    name
    id
  }
}
`
export const SPDEPARTMENT = gql`
    query Departments($id:Int) {
        department(id:$id) {
            name
            id
            eBooks{
            name
            }
        }
        }
`
export const EBOOKS = gql`
    query($id:Int){
        eBook(id:$id){
            id
            department{
                id
                name
            }
            file{
                fileId
                filename
            }
            cover{
                coverId
                filename
            }
            author
            name    
        }
        }
`
