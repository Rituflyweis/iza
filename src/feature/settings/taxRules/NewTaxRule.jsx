import { useState, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/axios';
import { useAppDispatch } from '../../../store/hooks';
import { showLoader, hideLoader } from '../../../store/slices/loaderSlice';
import useToast from '../../../hooks/useToast';
import { taxRuleSchema } from '../../../schema/taxRules/taxRuleSchema';

// Static location data
const staticCountries = [
  { id: '1', _id: '1', name: 'India', countryName: 'India' },
  { id: '2', _id: '2', name: 'United States', countryName: 'United States' },
  { id: '3', _id: '3', name: 'United Kingdom', countryName: 'United Kingdom' },
  { id: '4', _id: '4', name: 'Canada', countryName: 'Canada' },
  { id: '5', _id: '5', name: 'Australia', countryName: 'Australia' },
];

const staticStates = {
  '1': [ // India
    { id: '101', _id: '101', name: 'West Bengal', stateName: 'West Bengal', countryId: '1' },
    { id: '102', _id: '102', name: 'Delhi', stateName: 'Delhi', countryId: '1' },
    { id: '103', _id: '103', name: 'Maharashtra', stateName: 'Maharashtra', countryId: '1' },
    { id: '104', _id: '104', name: 'Karnataka', stateName: 'Karnataka', countryId: '1' },
    { id: '105', _id: '105', name: 'Tamil Nadu', stateName: 'Tamil Nadu', countryId: '1' },
    { id: '106', _id: '106', name: 'Uttar Pradesh', stateName: 'Uttar Pradesh', countryId: '1' },
  ],
  '2': [ // United States
    { id: '201', _id: '201', name: 'California', stateName: 'California', countryId: '2' },
    { id: '202', _id: '202', name: 'New York', stateName: 'New York', countryId: '2' },
    { id: '203', _id: '203', name: 'Texas', stateName: 'Texas', countryId: '2' },
    { id: '204', _id: '204', name: 'Florida', stateName: 'Florida', countryId: '2' },
  ],
  '3': [ // United Kingdom
    { id: '301', _id: '301', name: 'England', stateName: 'England', countryId: '3' },
    { id: '302', _id: '302', name: 'Scotland', stateName: 'Scotland', countryId: '3' },
    { id: '303', _id: '303', name: 'Wales', stateName: 'Wales', countryId: '3' },
  ],
  '4': [ // Canada
    { id: '401', _id: '401', name: 'Ontario', stateName: 'Ontario', countryId: '4' },
    { id: '402', _id: '402', name: 'Quebec', stateName: 'Quebec', countryId: '4' },
    { id: '403', _id: '403', name: 'British Columbia', stateName: 'British Columbia', countryId: '4' },
  ],
  '5': [ // Australia
    { id: '501', _id: '501', name: 'New South Wales', stateName: 'New South Wales', countryId: '5' },
    { id: '502', _id: '502', name: 'Victoria', stateName: 'Victoria', countryId: '5' },
    { id: '503', _id: '503', name: 'Queensland', stateName: 'Queensland', countryId: '5' },
  ],
};

const staticCities = {
  '101': [ // West Bengal
    { id: '1001', _id: '1001', name: 'Kolkata', cityName: 'Kolkata', stateId: '101' },
    { id: '1002', _id: '1002', name: 'Howrah', cityName: 'Howrah', stateId: '101' },
    { id: '1003', _id: '1003', name: 'Durgapur', cityName: 'Durgapur', stateId: '101' },
  ],
  '102': [ // Delhi
    { id: '1004', _id: '1004', name: 'New Delhi', cityName: 'New Delhi', stateId: '102' },
    { id: '1005', _id: '1005', name: 'Delhi', cityName: 'Delhi', stateId: '102' },
  ],
  '103': [ // Maharashtra
    { id: '1006', _id: '1006', name: 'Mumbai', cityName: 'Mumbai', stateId: '103' },
    { id: '1007', _id: '1007', name: 'Pune', cityName: 'Pune', stateId: '103' },
    { id: '1008', _id: '1008', name: 'Nagpur', cityName: 'Nagpur', stateId: '103' },
  ],
  '104': [ // Karnataka
    { id: '1009', _id: '1009', name: 'Bangalore', cityName: 'Bangalore', stateId: '104' },
    { id: '1010', _id: '1010', name: 'Mysore', cityName: 'Mysore', stateId: '104' },
  ],
  '105': [ // Tamil Nadu
    { id: '1011', _id: '1011', name: 'Chennai', cityName: 'Chennai', stateId: '105' },
    { id: '1012', _id: '1012', name: 'Coimbatore', cityName: 'Coimbatore', stateId: '105' },
  ],
  '106': [ // Uttar Pradesh
    { id: '1013', _id: '1013', name: 'Kanpur', cityName: 'Kanpur', stateId: '106' },
    { id: '1014', _id: '1014', name: 'Lucknow', cityName: 'Lucknow', stateId: '106' },
    { id: '1015', _id: '1015', name: 'Agra', cityName: 'Agra', stateId: '106' },
  ],
  '201': [ // California
    { id: '2001', _id: '2001', name: 'Los Angeles', cityName: 'Los Angeles', stateId: '201' },
    { id: '2002', _id: '2002', name: 'San Francisco', cityName: 'San Francisco', stateId: '201' },
  ],
  '202': [ // New York
    { id: '2003', _id: '2003', name: 'New York City', cityName: 'New York City', stateId: '202' },
    { id: '2004', _id: '2004', name: 'Buffalo', cityName: 'Buffalo', stateId: '202' },
  ],
  '301': [ // England
    { id: '3001', _id: '3001', name: 'London', cityName: 'London', stateId: '301' },
    { id: '3002', _id: '3002', name: 'Manchester', cityName: 'Manchester', stateId: '301' },
  ],
  '401': [ // Ontario
    { id: '4001', _id: '4001', name: 'Toronto', cityName: 'Toronto', stateId: '401' },
    { id: '4002', _id: '4002', name: 'Ottawa', cityName: 'Ottawa', stateId: '401' },
  ],
  '501': [ // New South Wales
    { id: '5001', _id: '5001', name: 'Sydney', cityName: 'Sydney', stateId: '501' },
    { id: '5002', _id: '5002', name: 'Newcastle', cityName: 'Newcastle', stateId: '501' },
  ],
};

const NewTaxRule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showSuccess, showError } = useToast();
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const isSubmittingRef = useRef(false);
  
  // Location data states
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  
  // Track selected values for useEffect dependencies
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [selectedStateId, setSelectedStateId] = useState('');

  const fetchCountries = async () => {
    try {
      setLoadingCountries(true);
      const response = await axiosInstance.get('/Country');
      const responseData = response.data?.data || response.data;
      const countriesList = Array.isArray(responseData) ? responseData : (responseData?.countries || []);
      setCountries(countriesList.length > 0 ? countriesList : staticCountries);
    } catch (error) {
      console.error('Error fetching countries:', error);
      // Try alternative endpoint
      try {
        const response = await axiosInstance.get('/Countries');
        const responseData = response.data?.data || response.data;
        const countriesList = Array.isArray(responseData) ? responseData : (responseData?.countries || []);
        setCountries(countriesList.length > 0 ? countriesList : staticCountries);
      } catch (err) {
        console.error('Error fetching countries from alternative endpoint:', err);
        // Use static data as fallback
        setCountries(staticCountries);
      }
    } finally {
      setLoadingCountries(false);
    }
  };

  const fetchStates = async (countryId) => {
    try {
      setLoadingStates(true);
      const response = await axiosInstance.get('/State', {
        params: { countryId },
      });
      const responseData = response.data?.data || response.data;
      const statesList = Array.isArray(responseData) ? responseData : (responseData?.states || []);
      setStates(statesList.length > 0 ? statesList : (staticStates[countryId] || []));
    } catch (error) {
      console.error('Error fetching states:', error);
      // Try alternative endpoint pattern
      try {
        const response = await axiosInstance.get(`/State/${countryId}`);
        const responseData = response.data?.data || response.data;
        const statesList = Array.isArray(responseData) ? responseData : (responseData?.states || []);
        setStates(statesList.length > 0 ? statesList : (staticStates[countryId] || []));
      } catch (err) {
        console.error('Error fetching states from alternative endpoint:', err);
        // Use static data as fallback
        setStates(staticStates[countryId] || []);
      }
    } finally {
      setLoadingStates(false);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      setLoadingCities(true);
      const response = await axiosInstance.get('/City', {
        params: { stateId },
      });
      const responseData = response.data?.data || response.data;
      const citiesList = Array.isArray(responseData) ? responseData : (responseData?.cities || []);
      setCities(citiesList.length > 0 ? citiesList : (staticCities[stateId] || []));
    } catch (error) {
      console.error('Error fetching cities:', error);
      // Try alternative endpoint pattern
      try {
        const response = await axiosInstance.get(`/City/${stateId}`);
        const responseData = response.data?.data || response.data;
        const citiesList = Array.isArray(responseData) ? responseData : (responseData?.cities || []);
        setCities(citiesList.length > 0 ? citiesList : (staticCities[stateId] || []));
      } catch (err) {
        console.error('Error fetching cities from alternative endpoint:', err);
        // Use static data as fallback
        setCities(staticCities[stateId] || []);
      }
    } finally {
      setLoadingCities(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      countryId: '',
      stateId: '',
      cityId: '',
      tax: '',
    },
    validationSchema: taxRuleSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting, setTouched, validateForm, resetForm }) => {
      // Mark that form submission was attempted
      setSubmitAttempted(true);

      // Mark all fields as touched FIRST so errors will display
      setTouched({
        countryId: true,
        stateId: true,
        cityId: true,
        tax: true,
      });

      // Then validate the form
      const validationErrors = await validateForm();

      // Stop if validation fails
      if (Object.keys(validationErrors).length > 0) {
        setSubmitting(false);
        return;
      }

      // Prevent double submission
      if (isSubmittingRef.current) return;
      isSubmittingRef.current = true;
      setSubmitting(true);

      try {
        dispatch(showLoader('Creating tax rule...'));

        const requestBody = {
          countryId: values.countryId,
          stateId: values.stateId,
          cityId: values.cityId,
          tax: parseFloat(values.tax),
        };

        await axiosInstance.post('/TaxRule', requestBody);

        showSuccess('Tax rule created successfully!');
        resetForm();
        setTimeout(() => navigate(-1), 1000);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          'Failed to create tax rule. Please try again.';
        showError(errorMessage);
        console.error('Error creating tax rule:', error);
      } finally {
        dispatch(hideLoader());
        setSubmitting(false);
        isSubmittingRef.current = false;
      }
    },
  });

  // Fetch countries on component mount
  useEffect(() => {
    fetchCountries();
  }, []);

  // Fetch states when countryId changes
  useEffect(() => {
    if (selectedCountryId) {
      fetchStates(selectedCountryId);
      setStates([]);
      setCities([]);
    } else {
      setStates([]);
      setCities([]);
    }
  }, [selectedCountryId]);

  // Fetch cities when stateId changes
  useEffect(() => {
    if (selectedStateId) {
      fetchCities(selectedStateId);
      setCities([]);
    } else {
      setCities([]);
    }
  }, [selectedStateId]);

  return (
    <div className="">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Icon icon="mdi:chevron-left" width={20} height={20} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Add New</h1>
          <p className="text-sm text-gray-400">Create a new tax rule</p>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Choose One
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Country Field */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">
              Country <span className="text-red-500">*</span>
            </span>
            <select
              name="countryId"
              value={formik.values.countryId}
              onChange={(e) => {
                const countryId = e.target.value;
                formik.handleChange(e);
                setSelectedCountryId(countryId);
                // Reset dependent fields
                formik.setFieldValue('stateId', '');
                formik.setFieldValue('cityId', '');
                setSelectedStateId('');
              }}
              onBlur={formik.handleBlur}
              disabled={loadingCountries}
              className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-100 ${
                formik.touched.countryId && formik.errors.countryId
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-pink-500'
              } ${loadingCountries ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="">{loadingCountries ? 'Loading...' : 'Select Country'}</option>
              {countries.map((country) => (
                <option key={country._id || country.id} value={country._id || country.id}>
                  {country.name || country.countryName || country.country || 'N/A'}
                </option>
              ))}
            </select>
            {formik.touched.countryId && formik.errors.countryId && (
              <span className="text-xs text-red-500">{formik.errors.countryId}</span>
            )}
          </label>

          {/* State Field */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">
              State <span className="text-red-500">*</span>
            </span>
            <select
              name="stateId"
              value={formik.values.stateId}
              onChange={(e) => {
                const stateId = e.target.value;
                formik.handleChange(e);
                setSelectedStateId(stateId);
                // Reset city when state changes
                formik.setFieldValue('cityId', '');
              }}
              onBlur={formik.handleBlur}
              disabled={!formik.values.countryId || loadingStates}
              className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-100 ${
                formik.touched.stateId && formik.errors.stateId
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-pink-500'
              } ${!formik.values.countryId || loadingStates ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="">
                {!formik.values.countryId
                  ? 'Select Country First'
                  : loadingStates
                  ? 'Loading...'
                  : 'Select State'}
              </option>
              {states.map((state) => (
                <option key={state._id || state.id} value={state._id || state.id}>
                  {state.name || state.stateName || state.state || 'N/A'}
                </option>
              ))}
            </select>
            {formik.touched.stateId && formik.errors.stateId && (
              <span className="text-xs text-red-500">{formik.errors.stateId}</span>
            )}
          </label>

          {/* City Field */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">
              City <span className="text-red-500">*</span>
            </span>
            <select
              name="cityId"
              value={formik.values.cityId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={!formik.values.stateId || loadingCities}
              className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-100 ${
                formik.touched.cityId && formik.errors.cityId
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-pink-500'
              } ${!formik.values.stateId || loadingCities ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <option value="">
                {!formik.values.stateId
                  ? 'Select State First'
                  : loadingCities
                  ? 'Loading...'
                  : 'Select City'}
              </option>
              {cities.map((city) => (
                <option key={city._id || city.id} value={city._id || city.id}>
                  {city.name || city.cityName || city.city || 'N/A'}
                </option>
              ))}
            </select>
            {formik.touched.cityId && formik.errors.cityId && (
              <span className="text-xs text-red-500">{formik.errors.cityId}</span>
            )}
          </label>
        </div>

        {/* Tax Rate Field */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-700">
            Tax Rate (%) <span className="text-red-500">*</span>
          </span>
          <input
            type="number"
            name="tax"
            value={formik.values.tax}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter tax rate (e.g., 7.5)"
            step="0.01"
            min="0"
            max="100"
            className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-100 ${
              formik.touched.tax && formik.errors.tax
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-pink-500'
            }`}
          />
          {formik.touched.tax && formik.errors.tax && (
            <span className="text-xs text-red-500">{formik.errors.tax}</span>
          )}
        </label>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="rounded-full border border-pink-500 bg-pink-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formik.isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaxRule;


