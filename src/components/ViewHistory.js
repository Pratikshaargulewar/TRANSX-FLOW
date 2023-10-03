import React from 'react';

const ViewHistory = ({ srNo, name, reason, timestamp, isPending }) => {
  return (
    <div className={`transaction ${isPending ? 'pending' : 'approved'}`}>
      <p><strong>SR No:</strong> {srNo}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Reason:</strong> {reason}</p>
      <p><strong>Timestamp:</strong> {timestamp}</p>
      <p><strong>Status:</strong> {isPending ? 'Pending' : 'Approved'}</p>
    </div>
  );
};

export default ViewHistory;
