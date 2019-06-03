import React from 'react';
import { shallow } from 'enzyme';
import { ViewInterviewFeedbackComponent } from './ViewInterviewFeedbackComponent';

describe('Test suite for ViewInterviewFeedbackComponent', () => {
    it('Test for ViewInterviewFeedback', () => {
        const wrapper = shallow(<ViewInterviewFeedbackComponent />);
        expect(wrapper.find('form')).toHaveLength(1);
    })
})