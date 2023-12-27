import {
    GroupsData,
    TeachersData,
} from '../../pages/studentsSchedule/types/types';
import { SelectGroupProps, SelectTeacherProps } from './types';

function SelectFaculty() {
    return (
        <select name="faculty" id="faculty">
            <option disabled selected>
                Факультет
            </option>
            <option value="202">ФАЯ</option>
            <option value="196">ФНЯ</option>
            <option value="222">ФРЯ</option>
            <option value="221">ФКЯиК</option>
            <option value="203">ПФ</option>
            <option value="193">ФМК</option>
        </select>
    );
}

function SelectEducationForm() {
    return (
        <select name="educationForm" id="educationForm">
            <option disabled selected>
                Форма об.
            </option>
            <option value="1">Дневная</option>
            <option value="2">Заочная</option>
        </select>
    );
}

function SelectGroup({ groupsData }: SelectGroupProps) {
    return (
        <select name="group" id="group">
            <option disabled selected>
                Группа
            </option>
            {groupsData.map((el: GroupsData, index: number) => (
                <option key={index} value={el.idGroup}>
                    {el.name}
                </option>
            ))}
        </select>
    );
}

function SelectTeacher({ teachersData }: SelectTeacherProps) {
    return (
        <select name="teacher" id="teacher">
            <option disabled selected>
                ФИО преподавателя
            </option>
            {teachersData.map((el: TeachersData, index: number) => (
                <option key={index} value={el.idTeacher}>
                    {el.fio}
                </option>
            ))}
        </select>
    );
}

function SelectWeekType() {
    return (
        <select name="weekType" id="weekType">
            <option disabled selected>
                Неделя
            </option>
            <option value="currentWeek">Текущая неделя</option>
            <option value="nextWeek">Следующая неделя</option>
        </select>
    );
}

export {
    SelectFaculty,
    SelectEducationForm,
    SelectWeekType,
    SelectGroup,
    SelectTeacher,
};
