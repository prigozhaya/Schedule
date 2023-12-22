import styled from 'styled-components';

const IndicatorMark = styled.span<{ $color?: string }>`
display: inline-block;
width: 15px;
height: 15px;
border-radius: 10px;
background-color: ${({ $color }) => $color};
`;
export default function LessonIndicator() {
    const indicators = [["ДСР","#66f995"], ["Лек.","#f5f576"], ["Сем.", "#ffb950"],["Практ.","#ed6363"]];
    return (
        <div>
            <p>
            {indicators.map((indicator: string[]) => (
              <span>
                <IndicatorMark $color={indicator[1]}/> {indicator[0]}
                </span>
            ))}
            </p>
        </div>
    );
}
