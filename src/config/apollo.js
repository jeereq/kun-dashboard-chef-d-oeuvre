import {
	ApolloClient,
	HttpLink,
	ApolloLink,
	InMemoryCache,
	concat,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://localhost:8000/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			token: localStorage.getItem("token") || null,
		},
	});
	return forward(operation);
});

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: concat(authMiddleware, httpLink),
});
