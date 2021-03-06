import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
  mutation IsUser($username: String!, $password: String!, $isAdmin: Boolean) {
    isUser(useInfo:{username: $username, password: $password, isAdmin: $isAdmin})
  }
`;
export const CREATE_JOURNAL_TYPE = gql`
  mutation CreateJournalType(
	$coverId: Int
	$name: String!
	$keywords: String
	$resourceType: Int
	$language: String
	) {
	createJournalType(
		input: {
		coverId: $coverId
		name: $name
		keywords: $keywords
		resourceType: $resourceType
		language: $language
		}
	){
		id
		cover{
			filename
			mimetype
		}
		name
		keywords
		resourceType
		language
	}
	}

`;
export const CREATE_JOURNAL = gql`
	mutation CreateJournal(
		$year: Int!
		$serialNumber: Int!
		$date: String
		$fileId: Int
		$generalId: Int!
		) {
		createJournal(
			input: {
			generalId: $generalId
			fileId: $fileId
			year: $year
			serialNumber: $serialNumber
			date: $date
			}
		)
		}

`;


export const CREATE_SCIENCE_BOOK = gql`
	mutation CreateScienceBook(
		$fileId: Int
		$degree: Int
		$author: String
		$coverId: Int
		$name: String!
		$language:String
		$keywords:String
		$description:String
		$resourceType:Int
		$date:String

	) {
		createScience(
			input: {
			fileId: $fileId
			coverId:$coverId
			name: $name
			author: $author
			degree: $degree
			language:$language
			keywords:$keywords
			description: $description
			resourceType:$resourceType
			date:$date
			
			}
		)
	}
`;

export const CREATE_FORIEGN_BOOK = gql`
	mutation CreateForiegnBook(
		$fileId: Int
		$coverId:Int
		$name:String!
		$author: String
		$keywords: String
		$description: String
		$resourceType:Int
		$language:String
		$resourseHolder:String
		$date:String
		) {
		createForiegnBook(
			input: {
			fileId: $fileId
			coverId: $coverId
			name: $name
			author: $author
			keywords: $keywords
			description: $description
			resourceType: $resourceType
			language:$language
			resourseHolder:$resourseHolder
			date:$date
			}
		)
		}
 
`;

export const ADD_USER = gql`
	mutation AddUser(
		$username: String!
		$password: String!
		$isAdmin: Boolean
		$fullName: String
		) {
		addUser(
			useInfo: {
			username: $username
			password: $password
			fullName: $fullName
			isAdmin: $isAdmin
			}
		)
		}
`;
export const CREATE_EBOOK = gql`
	mutation createEbook($author: String, $coverId: Int, $departmentId: Int, $name: String, $fileId: Int){
	createEbook(author: $author, coverId: $coverId, departmentId: $departmentId, name: $name, fileId: $fileId) {
		author
		name
		cover {
			coverId
			filename
		}
		file {
			fileId
			filename
		}
	}
}`

export const ADD_DEPARTMENT = gql`
	mutation AddDepartment ($name:String){
	createDepartment(name: $name) {
		id
		name
	}
}
  `

