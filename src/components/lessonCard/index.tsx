
import { StyledLessonTypeIndicator, StyledCard, StyledLessonSection, StyledLessonTimeIn, StyledLessoninfo, StyledLessonName, StyledLessonSectionLector } from './styles';
import { LessonCardProps } from './types';

export default function LessonCard({ pair }: LessonCardProps) {

  const {
    lesson,
    lessonType,
    timeIn,
    timeOut,
    classroom,
    lector
  } = pair;

  return (
    <StyledCard>
      <StyledLessonTypeIndicator $lessonType={lessonType}/>
        <StyledLessonSection>
          <StyledLessonTimeIn>{timeIn}</StyledLessonTimeIn>
          <StyledLessoninfo>{timeOut}</StyledLessoninfo>
        </StyledLessonSection>
        <StyledLessonSection>
          <StyledLessonName>{lesson}</StyledLessonName>
          <StyledLessoninfo>{classroom}</StyledLessoninfo>
        </StyledLessonSection>
        <StyledLessonSectionLector>
          <StyledLessoninfo>{lector}</StyledLessoninfo>
        </StyledLessonSectionLector>
    </StyledCard>
  );
}
