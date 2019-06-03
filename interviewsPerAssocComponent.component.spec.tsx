import React from 'react';
import { shallow } from 'enzyme';
import ReactPaginate from 'react-paginate'
import { InterviewPerAssocProps } from './interviewsPerAssocComponent.component';
import { InterviewPerAssoc } from './interviewsPerAssocComponent.component';

describe('test suite for InterviewList', () => {
    test('test rendering InterviewList', () => {
        const props: InterviewPerAssocProps = {
            assocInterviewArr: [],
            totalPages: 2,
            currentPage: 1,
            pageSize: 5
        }
        const wrapper = shallow(<InterviewPerAssoc {...props} />);
        expect(wrapper.find(ReactPaginate)).toHaveLength(1);
    });
});
