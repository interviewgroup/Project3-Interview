import React from 'react';
import ReactPaginate from 'react-paginate';
import { interviewClient } from '../../axios/sms-clients/interview-client';


export interface InterviewPerAssocProps {
    assocInterviewArr: InterviewPAssoc[],
    totalPages: number,
    currentPage: number,
    pageSize: number
}

export interface InterviewPerAssocState {
    assocInterviewArr,
    totalpages,
    currentPage,
    pageSize
}

export interface InterviewPAssoc {
    associateEmail: String,
    interviewCount: number,
    AssociateName: String
}

export class InterviewPerAssoc extends React.Component<any, any> {
    constructor(props: InterviewPerAssocProps) {
        super(props);
        this.state = {
            assocInterviewArr: [
                { associateEmail: ' ', interviewCount: undefined, AssociateName: '' },
            ],
            totalPages: 0,
            currentPage: 0,
            pageSize: 4
        };
    }

    componentDidMount() {
        this.fetchDbInfo(0);
    }

    handlePageClick = (data) => {
        console.log(data);
        let selected = data.selected;
        this.fetchDbInfo(selected);
    }

    async fetchDbInfo(pageNumber: number) {
        this.setState({
            ...this.state
        },
            async () => {
                try {
                    console.log(pageNumber + 'x' + this.state.pageSize)
                    const res = await interviewClient.interviewPerAssoc(pageNumber, this.state.pageSize);
                    console.log(res.data);
                    this.setState({
                        assocInterviewArr: res.data.content,
                        totalPages: res.data.totalPages,
                        currentPage: pageNumber
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        );
    }

    render() {
        const assocInterviewRows = this.state.assocInterviewArr.map((Assoc) => {
            return (
                <tr>
                    <td>{Assoc.AssociateName}</td>
                    <td>{Assoc.associateEmail}</td>
                    <td>{Assoc.interviewCount}</td>
                </tr>
            );
        });

        return (
            <div className='img-fluid'>
                <div className='tableholder3 scrollX scrollY'>

                    <h1> <b>Interviews </b> </h1>
                    <h1> <b>Associate Reports</b> </h1>

                    <div className="scrollX scrollY">
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th scope="col">Associate Name</th>
                                    <th scope="col">Associate Email</th>
                                    <th scope="col">Interviews</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assocInterviewRows}
                            </tbody>
                        </table>

                    </div>
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'page-item no-select justify-content-center'}
                        breakLinkClassName={'break-me-link page-link'}
                        pageCount={this.state.totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination page-navigator justify-content-center'}
                        activeClassName={'active justify-content-center'}
                        pageClassName={'page-item cursor-hover justify-content-center'}
                        pageLinkClassName={'paginate-link page-link no-select'}
                        nextClassName={'page-item cursor-hover justify-content-center'}
                        nextLinkClassName={'paginate-next page-link no-select'}
                        previousClassName={'page-item cursor-hover justify-content-center'}
                        previousLinkClassName={'paginate-previous page-link no-select'}
                    />
                </div>
            </div>
        );
    }
}