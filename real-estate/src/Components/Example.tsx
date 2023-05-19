import React from "react";
import { Container, Grid } from "@mui/material";

type Props = { exampleProp: String };

const Example = (props: Props) => {
	const { exampleProp } = props;
	return (
		<Container>
			<Grid>
				<Grid item>deez nuts</Grid>
			</Grid>
		</Container>
	);
};

export default Example;
