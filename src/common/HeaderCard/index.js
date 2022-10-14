import { NoPosterIcon, Poster, PosterImage, } from "./styled";
import {
    Card,
    Details,
    StyledTitle,
    Rate,
    SecondaryText,
    Rating,
    RatingStar,
    Tag,
    TagsList,
    Votes,
    Year,
    Overview,
    SubTitle,
    Caption,
} from "./styled";

const HeaderCard = ({
    imgUrl,
    title,
    captionSubTitleFirs,
    subTitleFirst,
    captionSubTitleSecond,
    subTitleSecond,
    votes,
    rate,
    tags,
    movieYear,
    overview,
}) => {
    return (
        <Card>
            <Poster>
                <Poster>{imgUrl ? <PosterImage src={imgUrl} alt={title} /> : <NoPosterIcon />}</Poster>
            </Poster>
            <Details>
                <StyledTitle>{title}</StyledTitle>
                {movieYear ? <Year>{movieYear}</Year> : null}
                <SubTitle><Caption>{captionSubTitleFirs}:</Caption> {subTitleFirst}</SubTitle>
                <SubTitle><Caption>{captionSubTitleSecond}:</Caption> {subTitleSecond}</SubTitle>

                {
                    tags ?
                        <TagsList>
                            {tags.map(({name}) => (
                                <Tag>{name}</Tag>
                            ))}
                        </TagsList>
                        :
                        ""
                }

                {rate && votes ?
                    <Rating>
                        <RatingStar />
                        <Rate>{rate} <SecondaryText>/10</SecondaryText></Rate>
                        <Votes>{votes} votes</Votes>
                    </Rating>
                    :
                    ""
                }

            </Details>
            <Overview>
                <p>{overview}</p>
            </Overview>

        </Card>
    )
};

export default HeaderCard;